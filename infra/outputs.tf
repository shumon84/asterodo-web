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
