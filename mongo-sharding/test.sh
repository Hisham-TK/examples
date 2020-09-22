#!/bin/bash

# x=1
# while [ $x -le 5 ]; do
#     echo "Welcome $x times"
#     x=$(($x + 1))
# done

export MONGOS_CONTAINER_PORT=30000
mongo --port $MONGOS_CONTAINER_PORT <./hashedSharding.js
mongo --port $MONGOS_CONTAINER_PORT <./rangeBaseSharding.js
