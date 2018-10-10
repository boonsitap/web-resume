FROM node:8.10.0

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
RUN npm install react-scripts -g

COPY . /usr/src/app

EXPOSE 3000

CMD [ "npm", "start" ]
