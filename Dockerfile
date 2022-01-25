FROM node:14-alpine

WORKDIR /app

RUN apk update & apk add nginx

COPY package.json yarn.lock ./

RUN yarn 

COPY . ./

CMD "yarn build ; cp -R ./build /usr/share/nginx/html ; nginx -g daemon off;"