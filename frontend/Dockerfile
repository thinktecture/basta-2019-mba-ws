FROM node:10-alpine AS builder

WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=builder /app/dist/basta2019 /usr/share/nginx/html

