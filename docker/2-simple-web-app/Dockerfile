# Select base image
FROM node:alpine

# Set default path for all commands
WORKDIR /usr/app

# Install some dependancy
COPY ./package.json ./
RUN npm i
COPY ./ ./

# Startup command
CMD [ "npm", "start" ]