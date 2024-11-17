FROM node:18-alpine

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

# RUN npm run build

# RUN npm install -g serve

EXPOSE 3000

CMD ["npm", "start"]