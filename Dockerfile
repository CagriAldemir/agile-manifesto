FROM node:12
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
