#!/usr/bin/env bash
set -euo pipefail

# Deploys the Eventbrite -> Gmail notifier Lambda, its DynamoDB state table,
# and an EventBridge schedule that invokes it hourly.
#
# This script does NOT set secrets (EVENTBRITE_TOKEN, GMAIL_USER,
# GMAIL_APP_PASSWORD). Run ./set-secrets.sh yourself afterwards for that.

REGION="${AWS_REGION:-us-east-1}"
FUNCTION_NAME="eventbrite-notifier"
ROLE_NAME="eventbrite-notifier-lambda-role"
TABLE_NAME="eventbrite-notified-attendees"
RULE_NAME="eventbrite-notifier-schedule"
SCHEDULE_EXPR="rate(1 hour)"

ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LAMBDA_DIR="$SCRIPT_DIR/lambda"
ZIP_PATH="$SCRIPT_DIR/function.zip"

echo "==> Installing lambda dependencies"
(cd "$LAMBDA_DIR" && npm install --omit=dev --silent)

echo "==> Zipping function code"
rm -f "$ZIP_PATH"
(cd "$LAMBDA_DIR" && zip -r -q "$ZIP_PATH" index.mjs package.json node_modules email-template.html banner.jpg)

echo "==> Ensuring IAM role exists"
if ! aws iam get-role --role-name "$ROLE_NAME" >/dev/null 2>&1; then
  aws iam create-role \
    --role-name "$ROLE_NAME" \
    --assume-role-policy-document '{
      "Version": "2012-10-17",
      "Statement": [{"Effect": "Allow", "Principal": {"Service": "lambda.amazonaws.com"}, "Action": "sts:AssumeRole"}]
    }' >/dev/null
  aws iam attach-role-policy \
    --role-name "$ROLE_NAME" \
    --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
  echo "    created role, waiting for IAM propagation..."
  sleep 10
else
  echo "    role already exists"
fi

ROLE_ARN=$(aws iam get-role --role-name "$ROLE_NAME" --query 'Role.Arn' --output text)

echo "==> Ensuring DynamoDB table exists"
if ! aws dynamodb describe-table --table-name "$TABLE_NAME" --region "$REGION" >/dev/null 2>&1; then
  aws dynamodb create-table \
    --table-name "$TABLE_NAME" \
    --attribute-definitions AttributeName=attendee_id,AttributeType=S \
    --key-schema AttributeName=attendee_id,KeyType=HASH \
    --billing-mode PAY_PER_REQUEST \
    --region "$REGION" >/dev/null
  aws dynamodb wait table-exists --table-name "$TABLE_NAME" --region "$REGION"
else
  echo "    table already exists"
fi

TABLE_ARN=$(aws dynamodb describe-table --table-name "$TABLE_NAME" --region "$REGION" --query 'Table.TableArn' --output text)

echo "==> Attaching DynamoDB access policy to role"
aws iam put-role-policy \
  --role-name "$ROLE_NAME" \
  --policy-name "eventbrite-notifier-dynamodb" \
  --policy-document "{
    \"Version\": \"2012-10-17\",
    \"Statement\": [{
      \"Effect\": \"Allow\",
      \"Action\": [\"dynamodb:GetItem\", \"dynamodb:PutItem\"],
      \"Resource\": \"$TABLE_ARN\"
    }]
  }"

echo "==> Creating or updating Lambda function"
if aws lambda get-function --function-name "$FUNCTION_NAME" --region "$REGION" >/dev/null 2>&1; then
  aws lambda update-function-code \
    --function-name "$FUNCTION_NAME" \
    --zip-file "fileb://$ZIP_PATH" \
    --region "$REGION" >/dev/null
  aws lambda wait function-updated --function-name "$FUNCTION_NAME" --region "$REGION"
else
  aws lambda create-function \
    --function-name "$FUNCTION_NAME" \
    --runtime nodejs20.x \
    --handler index.handler \
    --role "$ROLE_ARN" \
    --zip-file "fileb://$ZIP_PATH" \
    --timeout 30 \
    --memory-size 128 \
    --environment "Variables={DYNAMODB_TABLE=$TABLE_NAME,EVENTBRITE_EVENT_ID=1994448280496}" \
    --region "$REGION" >/dev/null
  aws lambda wait function-active --function-name "$FUNCTION_NAME" --region "$REGION"
fi

FUNCTION_ARN=$(aws lambda get-function --function-name "$FUNCTION_NAME" --region "$REGION" --query 'Configuration.FunctionArn' --output text)

echo "==> Ensuring EventBridge schedule exists"
aws events put-rule \
  --name "$RULE_NAME" \
  --schedule-expression "$SCHEDULE_EXPR" \
  --state ENABLED \
  --region "$REGION" >/dev/null

RULE_ARN=$(aws events describe-rule --name "$RULE_NAME" --region "$REGION" --query 'Arn' --output text)

aws lambda add-permission \
  --function-name "$FUNCTION_NAME" \
  --statement-id "AllowEventBridgeInvoke" \
  --action "lambda:InvokeFunction" \
  --principal events.amazonaws.com \
  --source-arn "$RULE_ARN" \
  --region "$REGION" >/dev/null 2>&1 || echo "    permission already exists"

aws events put-targets \
  --rule "$RULE_NAME" \
  --targets "Id=1,Arn=$FUNCTION_ARN" \
  --region "$REGION" >/dev/null

echo ""
echo "Deployed."
echo "  Function:  $FUNCTION_NAME ($FUNCTION_ARN)"
echo "  Table:     $TABLE_NAME"
echo "  Schedule:  $SCHEDULE_EXPR (rule: $RULE_NAME)"
echo ""
echo "Next: run ./set-secrets.sh to configure EVENTBRITE_TOKEN, GMAIL_USER, and GMAIL_APP_PASSWORD."
