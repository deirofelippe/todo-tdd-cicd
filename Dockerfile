FROM node:14-alpine3.12
WORKDIR /app
RUN apk add zsh
COPY package*.json .
RUN npm install
COPY . .
CMD tail -f /dev/null