# Getting started

You can use docker-compose to easily start app.

First of all, install [docker-compose](https://docs.docker.com/compose/install/) if you don't have it on your machine. Make sure you follow all prerequisites.

Second, you should create .env file with following content (example):

```
POSTGRES_PASSWORD=your_postgres_password
PRIVATE_API_PATH=http://bonsay_api:3020/api/
```

Now, you can execute this commands:

```
# create custom network to connect front-end and back-end (optional)
# you can use your subnet and gateway but edit next.config.js images option and
# api.ts IMAGE_API_URL value to allow nextjs fetch images from API
docker network create bonsay

# build containers and run application
docker-compose -f docker-compose.dev.yaml up
```
