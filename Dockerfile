FROM node:14-alpine3.12
WORKDIR /app
RUN apk update \
   && apk add zsh neovim \
   && sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.2/zsh-in-docker.sh)" -- \
      -p https://github.com/zsh-users/zsh-autosuggestions \
      -p https://github.com/zsh-users/zsh-completions \
      -p https://github.com/zsh-users/zsh-syntax-highlighting \
      -p https://github.com/hlissner/zsh-autopair

COPY package*.json ./
RUN npm install 
COPY ./ ./
CMD tail -f /dev/null