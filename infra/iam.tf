# IAMリソースの定義

#---------------------------------------------------------------
# Terraform CI用のIAMユーザーとポリシー
#---------------------------------------------------------------

# Terraform CI用のIAMユーザー
resource "aws_iam_user" "terraform_ci" {
  name = "${var.project_name}-terraform-ci"
  path = "/"

  tags = {
    Description = "Terraform CIで使用するIAMユーザー"
    ManagedBy   = "terraform"
  }
}

# Terraform CI用のIAMポリシー
resource "aws_iam_policy" "terraform_ci" {
  name        = "${var.project_name}-terraform-ci-policy"
  description = "Terraform CIがterraform planとapplyを実行するために必要な権限"
  
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      # S3バケットへのアクセス権限
      {
        Effect = "Allow"
        Action = [
          "s3:ListBucket",
          "s3:GetObject",
          "s3:PutObject",
          "s3:DeleteObject"
        ]
        Resource = [
          aws_s3_bucket.iac_code.arn,
          "${aws_s3_bucket.iac_code.arn}/*"
        ]
      },
      # DynamoDBテーブルへのアクセス権限
      {
        Effect = "Allow"
        Action = [
          "dynamodb:GetItem",
          "dynamodb:PutItem",
          "dynamodb:DeleteItem"
        ]
        Resource = aws_dynamodb_table.terraform_locks.arn
      },
      # IAMリソースの読み取り権限
      {
        Effect = "Allow"
        Action = [
          "iam:Get*",
          "iam:List*"
        ]
        Resource = "*"
      },
      # IAMリソースの作成・更新・削除権限
      {
        Effect = "Allow"
        Action = [
          "iam:CreatePolicy",
          "iam:DeletePolicy",
          "iam:CreateRole",
          "iam:DeleteRole",
          "iam:AttachRolePolicy",
          "iam:DetachRolePolicy",
          "iam:TagRole",
          "iam:TagPolicy",
          "iam:UpdateRole",
          "iam:UpdateAssumeRolePolicy"
        ]
        Resource = [
          "arn:aws:iam::*:policy/${var.project_name}-*",
          "arn:aws:iam::*:role/${var.project_name}-*"
        ]
      }
    ]
  })
}

# Terraform CI用のIAMユーザーにポリシーをアタッチ
resource "aws_iam_user_policy_attachment" "terraform_ci" {
  user       = aws_iam_user.terraform_ci.name
  policy_arn = aws_iam_policy.terraform_ci.arn
}

# Terraform CI用のアクセスキー
# 注意: アクセスキーはGitHub Secretsに手動で設定する必要があります
resource "aws_iam_access_key" "terraform_ci" {
  user = aws_iam_user.terraform_ci.name
}

#---------------------------------------------------------------
# 既存のIAMリソースをインポートするためのサンプル
#---------------------------------------------------------------

# 既存のIAMリソースをインポートするには、以下のコマンドを使用します：
#
# IAMユーザーのインポート:
# terraform import aws_iam_user.user_name user_name
#
# IAMグループのインポート:
# terraform import aws_iam_group.group_name group_name
#
# IAMポリシーのインポート:
# terraform import aws_iam_policy.policy_name arn:aws:iam::123456789012:policy/policy_name
#
# IAMロールのインポート:
# terraform import aws_iam_role.role_name role_name