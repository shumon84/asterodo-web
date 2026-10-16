# web/ を配る nginx のイメージ
FROM nginx:1.30-alpine

COPY ./web /usr/share/nginx/html
# 起動のしかた。VPS では vps-infra（shumon84/vps-infra）がイメージから取り出して使う
COPY compose.yaml /vps-infra/compose.yaml

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s CMD ["wget", "-q", "-O", "/dev/null", "http://127.0.0.1/"]
