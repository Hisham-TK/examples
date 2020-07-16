# Use an exsiting docker image as a base
FROM alpine

# download and install a dependancy
RUN apk add --update redis

# Tell image what to do on starts as a container
CMD [ "redis-server" ]
