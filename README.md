# Getting started

You can use docker-compose to easily start app.

First of all, install [docker-compose](https://docs.docker.com/compose/install/) if you don't have it on your machine. Make sure you follow all prerequisites.

Second, you should create .env file with following content (example):

```
POSTGRES_PASSWORD=your_postgres_password
PRIVATE_API_PATH=http://172.28.0.1:3030/
```

Now, you can execute this commands:

```
# create custom network to connect front-end and back-end (optional)
# you can use your subnet and gateway but edit next.config.js images option and
# api.ts IMAGE_API_URL value to allow nextjs fetch images from API
docker network create bonsay --subnet 172.28.0.0/16 --gateway 172.28.0.1

# build containers and run application
docker-compose up
```
