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

### Terraform CI用のIAMユーザーの設定

1. 初回のTerraform実行後、以下のコマンドでアクセスキー情報を取得します：
```shell
cd infra
terraform output terraform_ci_access_key_id
terraform output terraform_ci_secret_access_key
```

2. 取得したアクセスキー情報をGitHub Secretsに設定します：
   - リポジトリの「Settings」→「Secrets and variables」→「Actions」
   - 「New repository secret」をクリックして、上記の値を設定

これにより、Terraform CIは必要最小限の権限でAWSリソースを管理できます。
