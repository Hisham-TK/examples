#!/usr/bin/env sh

docker stop my-redis
docker rm my-redis
docker build -t hisham13/redis .
docker run -p 6379:6379 --name my-redis hisham13/redis
