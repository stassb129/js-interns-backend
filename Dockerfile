FROM node:14.15.2-alpine3.10

RUN npm install -g node-gyp
RUN npm install -g nodemon

RUN mkdir -p /app/backend
WORKDIR /app/backend


COPY package.json /app/backend/

RUN npm install

COPY . /app/backend/

CMD ["npm", "run", "start:dev"]