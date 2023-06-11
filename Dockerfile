# Stage 1: Build the frontend
FROM node:14-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the built frontend with Nginx
FROM nginx:alpine
COPY --from=builder /app/dist/VTuomrDx-Frontend-mlops-main /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the desired port
EXPOSE 5001

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
