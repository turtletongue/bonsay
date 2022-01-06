FROM node:14-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn 

COPY . ./

EXPOSE 8081

CMD ["yarn", "dev"]