# Tahap 1: Build aplikasi React/Vite kamu menggunakan Node 22
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Tahap 2: Setup server Nginx untuk menjalankan hasilnya di Cloud Run
FROM nginx:alpine
# Memindahkan hasil build (dari folder dist) ke dalam server Nginx
COPY --from=builder /app/dist /usr/share/nginx/html
# Google Cloud Run mewajibkan aplikasi berjalan di port 8080, jadi kita ubah konfigurasi default Nginx
RUN sed -i 's/listen  *80;/listen 8080;/g' /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]