# --- Stage 1: Build stage ---
FROM node:20-alpine AS build-stage
WORKDIR /app

# Copy package manifest and Yarn lockfile
COPY package.json yarn.lock ./

# Install dependencies using exact lockfile versions
RUN yarn install --frozen-lockfile

# Copy source code and build for production
COPY . .
RUN yarn build

# --- Stage 2: Production stage ---
FROM nginx:alpine AS production-stage

# Copy built assets from build stage to Nginx server root
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy custom Nginx config for SPA routing support
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]