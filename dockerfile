FROM node:18-bullseye

WORKDIR /app-node

COPY . .

RUN  npm install

EXPOSE 3000

CMD [ "npx","mocha","test/test.js" ]