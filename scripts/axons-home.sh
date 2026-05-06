#!/bin/bash
#
# axons-home 服务管理脚本
# 用法: ./axons-home.sh {start|stop|restart|status}
#

# ===== 配置 =====
APP_NAME="axons-home"
APP_BIN="${APP_NAME}-linux-amd64"
APP_PORT=8080
APP_DB="data/stats.db"
PID_FILE="/var/run/${APP_NAME}.pid"
LOG_FILE="/var/log/${APP_NAME}.log"

# ===== 颜色 =====
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m'

# ===== 函数 =====

get_pid() {
    if [ -f "$PID_FILE" ]; then
        cat "$PID_FILE"
    fi
}

is_running() {
    local pid=$(get_pid)
    if [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null; then
        return 0
    fi
    # PID 文件不存在或进程已死，尝试通过端口查找
    pid=$(ss -tlnp "sport = :${APP_PORT}" 2>/dev/null | grep -oP 'pid=\K\d+' | head -1)
    if [ -n "$pid" ]; then
        echo "$pid" > "$PID_FILE"
        return 0
    fi
    return 1
}

do_start() {
    if is_running; then
        echo -e "${YELLOW}[${APP_NAME}] 已在运行，PID: $(get_pid)${NC}"
        return 1
    fi

    # 确保日志目录存在
    mkdir -p "$(dirname "$LOG_FILE")"
    mkdir -p "$(dirname "$APP_DB")"

    echo -e "${GREEN}[${APP_NAME}] 启动中...${NC}"
    nohup "$APP_BIN" --port "$APP_PORT" --db "$APP_DB" >> "$LOG_FILE" 2>&1 &
    local pid=$!
    echo "$pid" > "$PID_FILE"

    # 等待启动
    sleep 1
    if kill -0 "$pid" 2>/dev/null; then
        echo -e "${GREEN}[${APP_NAME}] 启动成功，PID: $pid，端口: ${APP_PORT}${NC}"
        echo -e "${GREEN}[${APP_NAME}] 日志: ${LOG_FILE}${NC}"
        return 0
    else
        echo -e "${RED}[${APP_NAME}] 启动失败，请检查日志: ${LOG_FILE}${NC}"
        rm -f "$PID_FILE"
        return 1
    fi
}

do_stop() {
    if ! is_running; then
        echo -e "${YELLOW}[${APP_NAME}] 未运行${NC}"
        rm -f "$PID_FILE"
        return 1
    fi

    local pid=$(get_pid)
    echo -e "${GREEN}[${APP_NAME}] 停止中，PID: $pid${NC}"
    kill "$pid"

    # 等待进程退出（最多 10 秒）
    for i in $(seq 1 10); do
        if ! kill -0 "$pid" 2>/dev/null; then
            echo -e "${GREEN}[${APP_NAME}] 已停止${NC}"
            rm -f "$PID_FILE"
            return 0
        fi
        sleep 1
    done

    # 超时强制杀死
    echo -e "${YELLOW}[${APP_NAME}] 正常停止超时，强制终止${NC}"
    kill -9 "$pid" 2>/dev/null
    rm -f "$PID_FILE"
    echo -e "${GREEN}[${APP_NAME}] 已强制停止${NC}"
    return 0
}

do_restart() {
    do_stop
    sleep 1
    do_start
}

do_status() {
    if is_running; then
        local pid=$(get_pid)
        echo -e "${GREEN}[${APP_NAME}] 运行中，PID: $pid，端口: ${APP_PORT}${NC}"
        # 显示监听状态
        ss -tlnp "sport = :${APP_PORT}" 2>/dev/null | head -2
    else
        echo -e "${RED}[${APP_NAME}] 未运行${NC}"
        rm -f "$PID_FILE"
    fi
}

# ===== 主逻辑 =====

case "$1" in
    start)
        do_start
        ;;
    stop)
        do_stop
        ;;
    restart)
        do_restart
        ;;
    status)
        do_status
        ;;
    *)
        echo "用法: $0 {start|stop|restart|status}"
        exit 1
        ;;
esac