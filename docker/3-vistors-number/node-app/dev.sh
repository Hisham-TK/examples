#!/usr/bin/env sh

# Start redis container
docker stop my-redis
docker run -d -p 6379:6379 --name my-redis --rm redis

# Start app container
docker stop express-redis-app
docker rm express-redis-app
docker build -t hisham13/visits-app .
docker run -p 8080:8080 --name express-redis-app hisham13/visits-app
