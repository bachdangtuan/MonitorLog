FROM node:16-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
RUN echo "Asia/Ho_Chi_Minh" > /etc/timezone
COPY . .
EXPOSE 5000
CMD ["npm", "start"]