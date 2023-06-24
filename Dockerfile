FROM node:16-alpine as builder
WORKDIR /app/
COPY . .
RUN apk --no-cache add git tzdata && yarn add vuepress && yarn cache clean --all
EXPOSE 8080
RUN ["yarn", "run", "build"]

FROM nginx:1.23-alpine
WORKDIR /app/
COPY --from=builder /app/public /var/www
EXPOSE 8080
