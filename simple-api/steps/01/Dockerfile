FROM node:12.14.0-alpine3.11
RUN mkdir /opt/app
WORKDIR /opt/app
COPY index.js . 
ADD package.json . 
RUN npm install 