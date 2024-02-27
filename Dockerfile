# Install dependencies only when needed
FROM node:18-alpine AS deps
# Uncomment following line to use process.dlopen
# RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:18-alpine as builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build
CMD ["rm", "dist/**/*.map"]

# Production image, copy all the files and run nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80