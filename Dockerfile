FROM --platform=linux/amd64 node:16-bullseye-slim
WORKDIR /app
COPY package*.json ./

RUN yarn install 
COPY . .

RUN yarn run build