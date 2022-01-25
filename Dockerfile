FROM node:14-alpine

ENV NODE_ENV production

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn 

COPY . ./

CMD ["yarn", "start:prod"]