FROM node:18-alpine as deps

# Installing libvips-dev for sharp compatibility
RUN apk update && \
  apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git && \
  rm -rf /var/cache/apk/*

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/

# Copy only package.json and yarn.lock to install deps
COPY ./backend/package.json ./yarn.lock ./
RUN yarn global add node-gyp && \
  yarn config set network-timeout 600000 -g && \
  yarn install --production --frozen-lockfile && \
  yarn cache clean

FROM node:18-alpine as build

WORKDIR /opt/app

COPY --from=deps /opt/ /opt/app/

RUN chown -R node:node /opt/app
USER node

RUN yarn build

FROM node:18-alpine

WORKDIR /opt/app

COPY --from=build . .

USER node

EXPOSE 1337

CMD ["yarn", "start"]