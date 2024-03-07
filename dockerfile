# Step 1: build
FROM node:alpine as build

WORKDIR /app

COPY --chown=1000:1000 package*.json ./
RUN npm install

COPY --chown=1000:1000 . .
RUN npm run build

# Step 2: deploy
FROM nginx:latest

COPY --from=build /app/dist/nevarydev/browser /usr/share/nginx/html

EXPOSE 80