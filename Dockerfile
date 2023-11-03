
FROM node:16-alpine as builder

RUN apk add --no-cache curl

WORKDIR /app

COPY package*.json ./ 

# Copy rest of the files
COPY . .

RUN npm run ci:all
# Build the project
RUN npm run build -- --mode=$some_variable_name


# FROM nginx:alpine as production-build
# FROM mcr.microsoft.com/oss/nginx/nginx:1.15.5-alpine as production-build
FROM nginx:stable-alpine as runner
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

## Upgrade Package on Container Image
RUN apk update && apk upgrade

# Copy from the stahg 1
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080
ENTRYPOINT ["nginx", "-g", "daemon off;"]