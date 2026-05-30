# ============================================================
# Stage 1: base — install dependencies
# ============================================================
FROM node:22-alpine AS base
WORKDIR /app

# Copy only package manifests first for better layer caching
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

# ============================================================
# Stage 2: development — live-reload dev server
# ============================================================
FROM base AS development
WORKDIR /app

# Copy full source (volumes will override this at runtime)
COPY . .

EXPOSE 4200

# --host 0.0.0.0 makes ng serve reachable from outside the container
# --poll 500 enables filesystem polling for Windows/Docker volume compatibility
CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--poll", "500"]

# ============================================================
# Stage 3: builder — compile production build
# ============================================================
FROM base AS builder
WORKDIR /app

COPY . .

RUN npm run build

# ============================================================
# Stage 4: production — serve built files with nginx
# ============================================================
FROM nginx:alpine AS production

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Add custom SPA-aware nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Angular 19 application builder outputs to dist/<project>/browser/
COPY --from=builder /app/dist/mon-library/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
