# アステロ堂の公式ホームページ

## ブラウザ上での確認方法
```shell
docker compose up -d
```
上記を実行し、 http://localhost:8000

## VPS での動かし方
VPS では Traefik（[shumon84/vps-infra](https://github.com/shumon84/vps-infra)）がリバースプロキシとして動いていて、HTTPS の証明書も取る。このサイトはホストのポートを開けず、`docker-compose.production.yml` のラベルで Traefik から https://asterodo.com への転送を受ける。

```shell
git pull
docker compose -f docker-compose.production.yml up -d --build
```

- 先に VPS で Traefik を動かしておく（`traefik` ネットワークがないと起動できない）
- `asterodo.com` の A レコードは VPS の公開アドレスに向ける（DNS はムームードメイン）
- 証明書は、Traefik が HTTP（80 番）で取る（ラベルの `certresolver=letsencrypt-http`）。DNS が Route 53 にないため
