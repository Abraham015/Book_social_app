FROM node:19-alpine as build-stage

WORKDIR /app

COPY package*.json .

RUN npm install --force

COPY . .

RUN npm ci && npm run build -- --configuration production

FROM nginx

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY --from=build-stage /app/dist/book-social-ui/browser /usr/share/nginx/html