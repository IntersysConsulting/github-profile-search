FROM node:9
ENV APP_FOLDER /home/node/app

WORKDIR ${APP_FOLDER}

ADD package.json ${APP_FOLDER}/package.json
RUN npm install
ADD . ${APP_FOLDER}
EXPOSE 3000

CMD [ "npm", "start" ]