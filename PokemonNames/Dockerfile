FROM node:alpine

RUN npm install -g pm2

WORKDIR /usr/app

COPY ./package.json ./
RUN npm install

COPY ./ ./

EXPOSE 4002

CMD ["npm", "run", "docker-start"]
