# aws-eventbrite-notifier

Checks the live Le Tour de Frankie 2027 Eventbrite event every hour for new attendees and sends
each one a branded welcome email (kit contents, mandatory gear, race-day essentials) via Gmail.

## How it works

- **EventBridge** rule fires an **AWS Lambda** function every hour (`rate(1 hour)`).
- The Lambda calls the Eventbrite API for the event's attendee list.
- For each attendee not already in the **DynamoDB** table `eventbrite-notified-attendees`, it
  sends a welcome email via Gmail SMTP (Nodemailer) and records the attendee ID so they're never
  emailed twice.
- The email banner image (`lambda/banner.jpg`) is embedded directly in the email — no dependency
  on the site being live.

## Deploy

```bash
cd aws-eventbrite-notifier
./deploy.sh
```

This creates/updates the IAM role, DynamoDB table, Lambda function, and EventBridge schedule.
It does **not** set any secrets.

## Set secrets (run this yourself, in your own terminal)

Get a Gmail App Password: Google Account → Security → 2-Step Verification → App passwords
(requires 2-Step Verification enabled on the account).

```bash
export EVENTBRITE_TOKEN="your_eventbrite_private_token"
export GMAIL_USER="youraddress@gmail.com"
export GMAIL_APP_PASSWORD="your_16_char_app_password"
./set-secrets.sh
```

Never paste these values into a chat with an AI assistant — `set-secrets.sh` reads them from
your own shell environment and sends them straight to AWS.

## Test it

```bash
aws lambda invoke --function-name eventbrite-notifier --region us-east-1 /tmp/out.json && cat /tmp/out.json
```

Check logs:

```bash
aws logs tail /aws/lambda/eventbrite-notifier --region us-east-1 --follow
```

## Config

- **Event checked**: hardcoded to event ID `1994448280496` (Le Tour de Frankie El Infierno del
  Sur 2027) via the `EVENTBRITE_EVENT_ID` Lambda env var. Change it with:
  ```bash
  aws lambda update-function-configuration --function-name eventbrite-notifier \
    --environment "Variables={EVENTBRITE_EVENT_ID=<new_id>,...}"  # keep the other vars too
  ```
- **Schedule**: edit `SCHEDULE_EXPR` in `deploy.sh` and re-run it, or:
  ```bash
  aws events put-rule --name eventbrite-notifier-schedule --schedule-expression "rate(30 minutes)"
  ```
- **Email copy**: edit `lambda/email-template.html`, then re-run `./deploy.sh` to redeploy the
  code (secrets already set on the function are preserved automatically).

## Estimated cost

Hourly checks + occasional emails is comfortably within the AWS free tier (Lambda: 1M free
requests/month; DynamoDB: 25 GB + on-demand free tier; EventBridge: free for rule invocations).
Expect **$0/month** at this volume.
