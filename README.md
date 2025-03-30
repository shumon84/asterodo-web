# アステロ堂の公式ホームページ

## ブラウザ上での確認方法
```shell
docker compose up -d
```
上記を実行し、 http://localhost:8000 にアクセスしてください。

## インフラストラクチャ管理（Terraform）

プロジェクトのインフラストラクチャはTerraformで管理されています。

### ローカルでの実行方法

```shell
cd infra
terraform init
terraform plan
terraform apply
```

### GitHub Actions自動化

このプロジェクトでは、GitHub Actionsを使用してTerraformの実行を自動化しています：

1. `infra/` ディレクトリに変更があるプルリクエストが作成されると、自動的に `terraform plan` が実行され、結果がPRのコメントに表示されます。
2. 変更が `main` ブランチにマージされると、自動的に `terraform apply` が実行されます。

### 必要なGitHub Secrets

GitHub Actionsを使用するには、以下のSecretsをリポジトリに設定する必要があります：

- `AWS_ACCESS_KEY_ID`: AWSアクセスキーID
- `AWS_SECRET_ACCESS_KEY`: AWSシークレットアクセスキー
