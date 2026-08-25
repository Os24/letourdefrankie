#!/usr/bin/env bash
set -euo pipefail

# Run this YOURSELF in your own terminal — do not paste your Gmail App
# Password or Eventbrite token into a chat with an AI assistant.
#
# Usage:
#   export EVENTBRITE_TOKEN="your_eventbrite_private_token"
#   export GMAIL_USER="youraddress@gmail.com"
#   export GMAIL_APP_PASSWORD="your_16_char_app_password"
#   ./set-secrets.sh

: "${EVENTBRITE_TOKEN:?Set EVENTBRITE_TOKEN first}"
: "${GMAIL_USER:?Set GMAIL_USER first}"
: "${GMAIL_APP_PASSWORD:?Set GMAIL_APP_PASSWORD first}"

REGION="${AWS_REGION:-us-east-1}"
FUNCTION_NAME="eventbrite-notifier"

CURRENT_ENV=$(aws lambda get-function-configuration \
  --function-name "$FUNCTION_NAME" \
  --region "$REGION" \
  --query 'Environment.Variables' --output json)

DYNAMODB_TABLE=$(echo "$CURRENT_ENV" | python3 -c "import json,sys; print(json.load(sys.stdin).get('DYNAMODB_TABLE',''))")
EVENTBRITE_EVENT_ID=$(echo "$CURRENT_ENV" | python3 -c "import json,sys; print(json.load(sys.stdin).get('EVENTBRITE_EVENT_ID',''))")

aws lambda update-function-configuration \
  --function-name "$FUNCTION_NAME" \
  --region "$REGION" \
  --environment "Variables={DYNAMODB_TABLE=$DYNAMODB_TABLE,EVENTBRITE_EVENT_ID=$EVENTBRITE_EVENT_ID,EVENTBRITE_TOKEN=$EVENTBRITE_TOKEN,GMAIL_USER=$GMAIL_USER,GMAIL_APP_PASSWORD=$GMAIL_APP_PASSWORD}" \
  >/dev/null

echo "Secrets set on $FUNCTION_NAME."
