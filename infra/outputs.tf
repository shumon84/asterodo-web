# Terraformの実行後に出力される値を定義

# IaCコード用S3バケットの情報
output "iac_code_bucket" {
  value       = aws_s3_bucket.iac_code.id
  description = "IaCコードを保存するS3バケットの名前"
}

output "iac_code_bucket_arn" {
  value       = aws_s3_bucket.iac_code.arn
  description = "IaCコードを保存するS3バケットのARN"
}

# DynamoDBロックテーブルの情報
output "dynamodb_lock_table" {
  value       = aws_dynamodb_table.terraform_locks.name
  description = "Terraform状態ファイルのロックに使用するDynamoDBテーブルの名前"
}

output "dynamodb_lock_table_arn" {
  value       = aws_dynamodb_table.terraform_locks.arn
  description = "Terraform状態ファイルのロックに使用するDynamoDBテーブルのARN"
}

# Terraform CI用のIAMユーザーとアクセスキーの情報
output "terraform_ci_user" {
  value       = aws_iam_user.terraform_ci.name
  description = "Terraform CI用のIAMユーザー名"
}

output "terraform_ci_policy" {
  value       = aws_iam_policy.terraform_ci.name
  description = "Terraform CI用のIAMポリシー名"
}

output "terraform_ci_access_key_id" {
  value       = aws_iam_access_key.terraform_ci.id
  description = "Terraform CI用のアクセスキーID（GitHub Secretsに設定）"
  sensitive   = true
}

output "terraform_ci_secret_access_key" {
  value       = aws_iam_access_key.terraform_ci.secret
  description = "Terraform CI用のシークレットアクセスキー（GitHub Secretsに設定）"
  sensitive   = true
}
