FROM node:18-slim

WORKDIR /Backend

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV=development

EXPOSE ${PORT}

CMD [ "node", "server.js" ]
