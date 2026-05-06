# ---- Build Stage ----
FROM golang:1.23-alpine AS builder

WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o axons-home .

# ---- Runtime Stage ----
FROM scratch

COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=builder /app/axons-home /axons-home

EXPOSE 8080
VOLUME ["/data"]

ENTRYPOINT ["/axons-home"]
CMD ["-port", "8080", "-db", "/data/stats.db"]