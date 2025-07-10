FROM node:22-alpine AS base

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY . .

RUN npm ci

RUN chown -R appuser:appgroup /app

USER appuser

EXPOSE 8080

CMD [ "npm" , "run", "start" ]
