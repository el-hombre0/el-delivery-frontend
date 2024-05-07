FROM node:18-alpine
WORKDIR /eldelivery_frontend
COPY public /eldelivery_frontend/public
COPY src /eldelivery_frontend/src
COPY tsconfig.json /eldelivery_frontend/
COPY package.json /eldelivery_frontend/
RUN npm install --legacy-peer-deps
CMD ["npm", "run", "start"]
