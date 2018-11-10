FROM node:6.14.4-alpine
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 1337
CMD npm start
