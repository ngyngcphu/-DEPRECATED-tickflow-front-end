# syntax=docker/dockerfile:1
ARG NODE_VERSION=18.13.0
FROM node:${NODE_VERSION}-alpine as development
WORKDIR /tickflow
COPY package.json yarn.lock tsconfig.json tsconfig.node.json vite.config.ts index.html *.config.cjs .env ./
COPY ./src ./src
RUN yarn install && yarn build

FROM node:${NODE_VERSION}-alpine as production
WORKDIR /tickflow
COPY --from=development /tickflow/dist .
RUN yarn global add serve

EXPOSE 3000
CMD serve -s . -l 3000