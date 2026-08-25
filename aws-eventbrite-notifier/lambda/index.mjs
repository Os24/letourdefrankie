import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { DynamoDBClient, GetItemCommand, PutItemCommand } from "@aws-sdk/client-dynamodb";
import nodemailer from "nodemailer";

const __dirname = dirname(fileURLToPath(import.meta.url));

const EVENTBRITE_TOKEN = process.env.EVENTBRITE_TOKEN;
const EVENTBRITE_EVENT_ID = process.env.EVENTBRITE_EVENT_ID;
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const DYNAMODB_TABLE = process.env.DYNAMODB_TABLE;
const AWS_REGION = process.env.AWS_REGION || "us-east-1";

const ddb = new DynamoDBClient({ region: AWS_REGION });
const template = readFileSync(join(__dirname, "email-template.html"), "utf-8");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
});

async function fetchAttendees() {
  const attendees = [];
  let page = 1;
  while (true) {
    const url = new URL(`https://www.eventbriteapi.com/v3/events/${EVENTBRITE_EVENT_ID}/attendees/`);
    url.searchParams.set("page", String(page));
    const res = await fetch(url, { headers: { Authorization: `Bearer ${EVENTBRITE_TOKEN}` } });
    if (!res.ok) {
      throw new Error(`Eventbrite API error (${res.status}): ${await res.text()}`);
    }
    const body = await res.json();
    attendees.push(...body.attendees);
    if (!body.pagination.has_more_items) break;
    page += 1;
  }
  return attendees;
}

async function alreadyNotified(attendeeId) {
  const result = await ddb.send(
    new GetItemCommand({
      TableName: DYNAMODB_TABLE,
      Key: { attendee_id: { S: attendeeId } },
    })
  );
  return Boolean(result.Item);
}

async function markNotified(attendeeId) {
  await ddb.send(
    new PutItemCommand({
      TableName: DYNAMODB_TABLE,
      Item: {
        attendee_id: { S: attendeeId },
        notified_at: { S: new Date().toISOString() },
      },
    })
  );
}

function renderEmail({ name, ticketType }) {
  return template.replaceAll("{{NAME}}", name).replaceAll("{{TICKET_TYPE}}", ticketType);
}

async function sendWelcomeEmail(attendee) {
  const { profile, ticket_class_name } = attendee;
  await transporter.sendMail({
    from: `"Le Tour de Frankie" <${GMAIL_USER}>`,
    to: profile.email,
    subject: "Tu registro para Le Tour de Frankie está confirmado",
    html: renderEmail({ name: profile.first_name || profile.name, ticketType: ticket_class_name }),
    attachments: [
      {
        filename: "banner.jpg",
        path: join(__dirname, "banner.jpg"),
        cid: "banner",
      },
    ],
  });
}

export const handler = async () => {
  const attendees = await fetchAttendees();
  const active = attendees.filter((a) => a.status === "Attending" && !a.cancelled && !a.refunded);

  let sentCount = 0;
  for (const attendee of active) {
    if (await alreadyNotified(attendee.id)) continue;
    await sendWelcomeEmail(attendee);
    await markNotified(attendee.id);
    sentCount += 1;
  }

  const result = { checked: active.length, emailsSent: sentCount };
  console.log(JSON.stringify(result));
  return result;
};
