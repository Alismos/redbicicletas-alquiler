FROM node:18-alpine

# Create app directory
RUN mkdir /redbicicletas-alquiler
WORKDIR /redbicicletas-alquiler

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /redbicicletas-alquiler/

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source
COPY . /redbicicletas-alquiler

ARG SECRET
ARG REDBICICLETAS_BICICLETAS_PORT
ARG REDBICICLETAS_ARQUILER_PORT

ENV SECRET=$SECRET
ENV REDBICICLETAS_BICICLETAS_PORT=$REDBICICLETAS_BICICLETAS_PORT
ENV REDBICICLETAS_ARQUILER_PORT=$REDBICICLETAS_ARQUILER_PORT

EXPOSE 8060
CMD [ "npm", "start" ]