FROM node:18-alpine
WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

RUN apk --no-cache add --virtual builds-deps build-base python3

RUN yarn
RUN rm -rf ./.next/cache
RUN yarn cache clean


COPY . .

RUN yarn build

EXPOSE 8080

CMD ["yarn", "start"]
