FROM ubuntu:latest

WORKDIR /app
COPY . /app

RUN apt-get update
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - && apt-get install -y nodejs
RUN npm install webpack -g
RUN npm install
CMD webpack --watch 