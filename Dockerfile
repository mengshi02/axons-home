# ---- Build Stage ----
FROM golang:1.23-alpine AS builder

WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .

# Build with docs embedded
RUN go build -ldflags="-s -w" -o axons-home .

# ---- Runtime Stage ----
FROM scratch

COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=builder /app/axons-home /axons-home
COPY --from=builder /app/crt /crt

EXPOSE 443
VOLUME ["/data"]

ENTRYPOINT ["/axons-home"]
CMD ["-port", "443", "-db", "/data/stats.db", "-tls"]