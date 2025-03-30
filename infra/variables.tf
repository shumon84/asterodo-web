variable "aws_region" {
  description = "AWSのリージョン"
  type        = string
  default     = "ap-northeast-1"
}

variable "project_name" {
  description = "プロジェクト名"
  type        = string
  default     = "asterodo-web"
}

variable "default_tags" {
  description = "すべてのリソースに付与するデフォルトタグ"
  type        = map(string)
  default = {
    Environment = "dev"
    Project     = "asterodo-web"
    ManagedBy   = "terraform"
  }
}