# AWSリソースの定義

# IaCコードを保存するためのS3バケット
resource "aws_s3_bucket" "iac_code" {
  bucket = "${var.project_name}-tfstate"

  force_destroy = true

  tags = {
    Name        = "${var.project_name}-tfstate"
    Description = "IaC コードを保存するためのバケット"
  }
}

# バケットのバージョニング設定
resource "aws_s3_bucket_versioning" "iac_code" {
  bucket = aws_s3_bucket.iac_code.id
  
  versioning_configuration {
    status = "Enabled"
  }
}

# バケットの暗号化設定
resource "aws_s3_bucket_server_side_encryption_configuration" "iac_code" {
  bucket = aws_s3_bucket.iac_code.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

# バケットのパブリックアクセスブロック設定
resource "aws_s3_bucket_public_access_block" "iac_code" {
  bucket = aws_s3_bucket.iac_code.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# Terraformの状態ファイルのロックテーブル
resource "aws_dynamodb_table" "terraform_locks" {
  name         = "${var.project_name}-tfstate-lock"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }

  tags = {
    Name        = "${var.project_name}-tfstate-lock"
    Description = "Terraformの状態ファイルのロックテーブル"
  }
}
