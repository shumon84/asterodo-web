# アステロ堂の公式ホームページ

## ブラウザ上での確認方法
```shell
docker compose up -d
```
上記を実行し、 http://localhost:8000

## VPS での動かし方
VPS で動かすサービスは vps-infra（[shumon84/vps-infra](https://github.com/shumon84/vps-infra)）がまとめて起動・入れ替えをする（vps-infra の `docs/deploy.md`）。このリポジトリでは、本番用のイメージと、その起動のしかた（`compose.yaml`）を作るだけ。

- main に入ると、GitHub Actions（「CI」の publish）がイメージを作り、GHCR（`ghcr.io/shumon84/asterodo-web`）に置く。名前は `main`（いちばん新しいもの）と `sha-xxxxxxx`（コミットごと）
- VPS では、vps-infra のタイマーが 5 分おきにイメージを見て、新しければ入れ替える。起動できなければ前の版に戻す。VPS で手ですることはない
- https://asterodo.com で開く（vps-infra の `services.yaml` で `access: public`）
- `compose.yaml`: 本番での起動のしかた。イメージの `/vps-infra/compose.yaml` に入れる。Traefik のラベルは書かない（vps-infra が付ける）
- `compose.ci.yaml`: CI で Traefik の後ろで動かすときに足すラベル（vps-infra が付けるものと同じ）
- `asterodo.com` の A レコードは VPS の公開アドレスに向ける（DNS はムームードメインで、手で管理する）
- 証明書は、Traefik が HTTP（80 番）で取る（`services.yaml` の `cert: http`）。DNS が Route 53 にないため
