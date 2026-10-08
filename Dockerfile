# web/ を配る nginx のイメージ
FROM nginx:1.30-alpine

COPY ./web /usr/share/nginx/html
