#!/bin/sh

# export $(egrep -v '^#' ./.env | xargs)

export CURRENT_IP_ADDRESS="192.168.1.94"
export MONGOS_CONTAINER_PORT=30000
export CONFIG_RS_NAME=configrs
export CONFIG_RS_CONTAINER_1_PORT=30001
export CONFIG_RS_CONTAINER_2_PORT=30002
export CONFIG_RS_CONTAINER_3_PORT=30003
export SHARD_1_RS_NAME=shard1rs
export SHARD_1_CONTAINER_1_PORT=30011
export SHARD_1_CONTAINER_2_PORT=30012
export SHARD_1_CONTAINER_3_PORT=30013
export SHARD_2_RS_NAME=shard2rs
export SHARD_2_CONTAINER_1_PORT=30021
export SHARD_2_CONTAINER_2_PORT=30022
export SHARD_2_CONTAINER_3_PORT=30023
export SHARD_3_RS_NAME=shard3rs
export SHARD_3_CONTAINER_1_PORT=30031
export SHARD_3_CONTAINER_2_PORT=30032
export SHARD_3_CONTAINER_3_PORT=30033

echo Removing all previous container and volumes related to \"svr\"
docker ps | grep "svr" | awk '{print $1}' | xargs docker stop -t 1 | echo All \"svr\" containers are stoped!
docker ps -a | grep 'svr' | awk '{print $1}' | xargs docker rm -f -v | echo All \"svr\" containers are removed!
docker volume ls | grep 'svr' | awk '{print $2}' | xargs docker volume rm -f | echo All \"svr\" volumes are removed!
docker stop mongos -t 1 | docker rm mongos -f | docker volume rm mongos_mongos | ech \"Mongos\" container and volume are removed!

echo Mongo config and shards servers instantcs are init
docker-compose -f ./config/docker-compose.yml up --build -d
docker-compose -f ./shard1/docker-compose.yml up --build -d
docker-compose -f ./shard2/docker-compose.yml up --build -d
docker-compose -f ./shard3/docker-compose.yml up --build -d
docker-compose -f ./mongos/docker-compose.yml up --build -d

echo After 13 seconds will config all replica sets && sleep 13
# echo Config replication on Config server
mongo --port $CONFIG_RS_CONTAINER_1_PORT --eval "rs.initiate({_id:\"$CONFIG_RS_NAME\",configsvr:true,members:[{_id:0,host:\"$CURRENT_IP_ADDRESS:$CONFIG_RS_CONTAINER_1_PORT\"},{_id:1,host:\"$CURRENT_IP_ADDRESS:$CONFIG_RS_CONTAINER_2_PORT\"},{_id:2,host:\"$CURRENT_IP_ADDRESS:$CONFIG_RS_CONTAINER_3_PORT\"}]})"
# echo Config Replication on Shard 1 server
mongo --port $SHARD_1_CONTAINER_1_PORT --eval "rs.initiate({_id:\"$SHARD_1_RS_NAME\",members:[{_id:0,host:\"$CURRENT_IP_ADDRESS:$SHARD_1_CONTAINER_1_PORT\"},{_id:1,host:\"$CURRENT_IP_ADDRESS:$SHARD_1_CONTAINER_2_PORT\"},{_id:2,host:\"$CURRENT_IP_ADDRESS:$SHARD_1_CONTAINER_3_PORT\"}]})"
# echo Config Replication on Shard 2 server
mongo --port $SHARD_2_CONTAINER_1_PORT --eval "rs.initiate({_id:\"$SHARD_2_RS_NAME\",members:[{_id:0,host:\"$CURRENT_IP_ADDRESS:$SHARD_2_CONTAINER_1_PORT\"},{_id:1,host:\"$CURRENT_IP_ADDRESS:$SHARD_2_CONTAINER_2_PORT\"},{_id:2,host:\"$CURRENT_IP_ADDRESS:$SHARD_2_CONTAINER_3_PORT\"}]})"
# echo Config Replication on Shard 3 server
mongo --port $SHARD_3_CONTAINER_1_PORT --eval "rs.initiate({_id:\"$SHARD_3_RS_NAME\",members:[{_id:0,host:\"$CURRENT_IP_ADDRESS:$SHARD_3_CONTAINER_1_PORT\"},{_id:1,host:\"$CURRENT_IP_ADDRESS:$SHARD_3_CONTAINER_2_PORT\"},{_id:2,host:\"$CURRENT_IP_ADDRESS:$SHARD_3_CONTAINER_3_PORT\"}]})"

echo After 13 seconds will Add shards to Mongs && sleep 13
mongo --port $MONGOS_CONTAINER_PORT --eval "sh.addShard(\"$SHARD_1_RS_NAME/$CURRENT_IP_ADDRESS:$SHARD_1_CONTAINER_1_PORT,$CURRENT_IP_ADDRESS:$SHARD_1_CONTAINER_2_PORT,$CURRENT_IP_ADDRESS:$SHARD_1_CONTAINER_3_PORT\")"
mongo --port $MONGOS_CONTAINER_PORT --eval "sh.addShard(\"$SHARD_2_RS_NAME/$CURRENT_IP_ADDRESS:$SHARD_2_CONTAINER_1_PORT,$CURRENT_IP_ADDRESS:$SHARD_2_CONTAINER_2_PORT,$CURRENT_IP_ADDRESS:$SHARD_2_CONTAINER_3_PORT\")"
mongo --port $MONGOS_CONTAINER_PORT --eval "sh.addShard(\"$SHARD_3_RS_NAME/$CURRENT_IP_ADDRESS:$SHARD_3_CONTAINER_1_PORT,$CURRENT_IP_ADDRESS:$SHARD_3_CONTAINER_2_PORT,$CURRENT_IP_ADDRESS:$SHARD_3_CONTAINER_3_PORT\")"

echo After 13 seconds will add data to shardingDb && sleep 13
mongo --port $MONGOS_CONTAINER_PORT <./insertData.js

# echo Congratulation all shards are started to plz connect only on mongos db
