FROM golang:1.20
WORKDIR /app
COPY go.mod .
RUN go mod download
COPY . .
RUN go build -o alerting-service
CMD ["./alerting-service"]