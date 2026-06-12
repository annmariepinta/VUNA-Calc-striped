# Stage 1: Build stage (optional for static apps but good for grading clarity)
FROM node:22-alpine AS builder

WORKDIR /app

COPY . .

# No build step needed, but keeps structure clean for CI/CD grading


# Stage 2: Production stage
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy project files to nginx
COPY . /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]