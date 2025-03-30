# Stage 1: Build Angular app
FROM node:20-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
RUN npm run build --configuration production

# Stage 2: Serve with Nginx (minimal)
FROM nginx:alpine

COPY --from=build /app/dist/<your-app-name> /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
