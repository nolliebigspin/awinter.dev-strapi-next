FROM node:18-alpine as base

# Installing libvips-dev for sharp compatibility
RUN apk update && \
  apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git && \
  rm -rf /var/cache/apk/*

ARG node_env=production
ARG strapi_admin_backend_url
ARG strapi_admin_path
ENV NODE_ENV=${node_env}

WORKDIR /app/

FROM base as deps

COPY ./backend/package.json ./yarn.lock ./
# Copy only package.json and yarn.lock to install deps
RUN yarn global add node-gyp \
  && yarn config set network-timeout 600000 -g \
  && yarn install --frozen-lockfile \
  && yarn cache clean

FROM base as deps-prod

COPY \
  ./backend/package.json \
  ./yarn.lock \
  ./
# Copy only package.json and yarn.lock to install deps
RUN yarn global add node-gyp \
  && yarn config set network-timeout 600000 -g \
  && yarn install --production --frozen-lockfile \
  && yarn cache clean

FROM base as build

COPY ./backend/tsconfig.json .
COPY --from=deps \
  /app/package.json \
  /app/yarn.lock \
  ./
COPY --from=deps /app/node_modules ./node_modules
COPY ./backend/.strapi ./.strapi
COPY ./backend/config ./config
COPY ./backend/public ./public
COPY ./backend/src ./src
COPY ./backend/types ./types
COPY ./backend/database ./database

ENV STRAPI_ADMIN_BACKEND_URL=${strapi_admin_backend_url}
ENV ADMIN_PATH=${strapi_admin_path}

RUN yarn build
RUN ls -lah /app
# RUN node ./node_modules/.bin/strapi build

FROM base as runner

COPY --from=deps-prod /app/node_modules /app/node_modules
COPY --from=build \
  /app/package.json \
  /app/yarn.lock \
  ./
COPY --from=build /app/.strapi ./.strapi
COPY --from=build /app/dist ./dist
COPY --from=build /app/public ./public

RUN chown -R node:node /app
USER node

EXPOSE 1337

CMD ["yarn", "start"]