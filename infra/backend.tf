terraform {
  backend "s3" {
    bucket         = "asterodo-web-tfstate"
    key            = "terraform.tfstate"
    region         = "ap-northeast-1"
    dynamodb_table = "asterodo-web-tfstate-lock"
    encrypt        = true
  }
}