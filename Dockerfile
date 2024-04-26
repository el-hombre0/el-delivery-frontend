FROM node:18-alpine
WORKDIR /eldelivery_frontend/
COPY public/ /eldelivery_frontend/public
COPY src/ /eldelivery_frontend/src
COPY package.json /eldelivery_frontend/
RUN npm install
CMD ["npm", "start"]
