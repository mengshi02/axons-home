#!/bin/bash
#
# axons-home service management script
# Usage: ./axons-home.sh {start|stop|restart|status}
#

# ===== Configuration =====
APP_NAME="axons-home"
APP_BIN="${APP_NAME}-linux-amd64"
APP_PORT=443
APP_DB="data/stats.db"
APP_TLS="--tls"
APP_CERT="--cert crt/www.axons.chat.pem"
APP_KEY="--key crt/www.axons.chat.key"
PID_FILE="/var/run/${APP_NAME}.pid"
LOG_FILE="/var/log/${APP_NAME}.log"

# ===== Colors =====
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m'

# ===== Functions =====

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
    # PID file missing or process dead, try finding by port
    pid=$(ss -tlnp "sport = :${APP_PORT}" 2>/dev/null | grep -oP 'pid=\K\d+' | head -1)
    if [ -n "$pid" ]; then
        echo "$pid" > "$PID_FILE"
        return 0
    fi
    return 1
}

do_start() {
    if is_running; then
        echo -e "${YELLOW}[${APP_NAME}] Already running, PID: $(get_pid)${NC}"
        return 1
    fi

    # Ensure log directory exists
    mkdir -p "$(dirname "$LOG_FILE")"
    mkdir -p "$(dirname "$APP_DB")"

    echo -e "${GREEN}[${APP_NAME}] Starting...${NC}"
    nohup "$APP_BIN" --port "$APP_PORT" --db "$APP_DB" $APP_TLS $APP_CERT $APP_KEY >> "$LOG_FILE" 2>&1 &
    local pid=$!
    echo "$pid" > "$PID_FILE"

    # Wait for startup
    sleep 1
    if kill -0 "$pid" 2>/dev/null; then
        echo -e "${GREEN}[${APP_NAME}] Started successfully, PID: $pid, Port: ${APP_PORT}${NC}"
        echo -e "${GREEN}[${APP_NAME}] Log: ${LOG_FILE}${NC}"
        return 0
    else
        echo -e "${RED}[${APP_NAME}] Failed to start, check log: ${LOG_FILE}${NC}"
        rm -f "$PID_FILE"
        return 1
    fi
}

do_stop() {
    if ! is_running; then
        echo -e "${YELLOW}[${APP_NAME}] Not running${NC}"
        rm -f "$PID_FILE"
        return 1
    fi

    local pid=$(get_pid)
    echo -e "${GREEN}[${APP_NAME}] Stopping, PID: $pid${NC}"
    kill "$pid"

    # Wait for process to exit (max 10 seconds)
    for i in $(seq 1 10); do
        if ! kill -0 "$pid" 2>/dev/null; then
            echo -e "${GREEN}[${APP_NAME}] Stopped${NC}"
            rm -f "$PID_FILE"
            return 0
        fi
        sleep 1
    done

    # Force kill on timeout
    echo -e "${YELLOW}[${APP_NAME}] Graceful stop timed out, force killing${NC}"
    kill -9 "$pid" 2>/dev/null
    rm -f "$PID_FILE"
    echo -e "${GREEN}[${APP_NAME}] Force stopped${NC}"
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
        echo -e "${GREEN}[${APP_NAME}] Running, PID: $pid, Port: ${APP_PORT}${NC}"
        # Show listening status
        ss -tlnp "sport = :${APP_PORT}" 2>/dev/null | head -2
    else
        echo -e "${RED}[${APP_NAME}] Not running${NC}"
        rm -f "$PID_FILE"
    fi
}

# ===== Main Logic =====

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
        echo "Usage: $0 {start|stop|restart|status}"
        exit 1
        ;;
esac