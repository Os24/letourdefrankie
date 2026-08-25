#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const EVENTBRITE_TOKEN = process.env.EVENTBRITE_TOKEN;
const API_BASE = "https://www.eventbriteapi.com/v3";

if (!EVENTBRITE_TOKEN) {
  console.error(
    "Missing EVENTBRITE_TOKEN environment variable. Create a private token at " +
      "https://www.eventbrite.com/platform/api-keys and set EVENTBRITE_TOKEN before starting this server."
  );
  process.exit(1);
}

async function eventbriteGet(path: string, params?: Record<string, string | number | undefined>) {
  const url = new URL(`${API_BASE}${path}`);
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) url.searchParams.set(key, String(value));
    }
  }

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${EVENTBRITE_TOKEN}` },
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(
      `Eventbrite API error (${response.status}): ${body.error_description ?? body.error ?? JSON.stringify(body)}`
    );
  }
  return body;
}

function textResult(data: unknown) {
  return { content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }] };
}

const server = new McpServer({
  name: "mcp-eventbrite",
  version: "1.0.0",
});

server.registerTool(
  "list_organizations",
  {
    title: "List Eventbrite organizations",
    description:
      "List the Eventbrite organizations accessible to the authenticated user. Use this to find an organization_id for other tools.",
    inputSchema: {},
  },
  async () => {
    const data = await eventbriteGet("/users/me/organizations/");
    return textResult(data.organizations ?? data);
  }
);

server.registerTool(
  "list_events",
  {
    title: "List events for an organization",
    description:
      "List events belonging to an Eventbrite organization. If organization_id is omitted, the first organization returned by list_organizations is used.",
    inputSchema: {
      organization_id: z.string().optional().describe("Eventbrite organization ID"),
      status: z
        .enum(["draft", "live", "started", "ended", "completed", "canceled", "all"])
        .optional()
        .describe("Filter events by status (default: all)"),
      page: z.number().int().positive().optional().describe("Page number for pagination"),
    },
  },
  async ({ organization_id, status, page }) => {
    let orgId = organization_id;
    if (!orgId) {
      const orgs = await eventbriteGet("/users/me/organizations/");
      orgId = orgs.organizations?.[0]?.id;
      if (!orgId) throw new Error("No organization_id provided and none found via list_organizations.");
    }
    const data = await eventbriteGet(`/organizations/${orgId}/events/`, { status, page, expand: "venue" });
    return textResult(data);
  }
);

server.registerTool(
  "get_event",
  {
    title: "Get event details",
    description: "Get full details for a single Eventbrite event by ID.",
    inputSchema: {
      event_id: z.string().describe("Eventbrite event ID"),
    },
  },
  async ({ event_id }) => {
    const data = await eventbriteGet(`/events/${event_id}/`, { expand: "venue,organizer,ticket_availability" });
    return textResult(data);
  }
);

server.registerTool(
  "list_ticket_classes",
  {
    title: "List ticket classes for an event",
    description: "List the ticket types/classes (pricing, capacity, sales status) for an Eventbrite event.",
    inputSchema: {
      event_id: z.string().describe("Eventbrite event ID"),
    },
  },
  async ({ event_id }) => {
    const data = await eventbriteGet(`/events/${event_id}/ticket_classes/`);
    return textResult(data);
  }
);

server.registerTool(
  "list_attendees",
  {
    title: "List attendees for an event",
    description: "List attendees (registrants) for an Eventbrite event, including ticket type and check-in status.",
    inputSchema: {
      event_id: z.string().describe("Eventbrite event ID"),
      page: z.number().int().positive().optional().describe("Page number for pagination"),
    },
  },
  async ({ event_id, page }) => {
    const data = await eventbriteGet(`/events/${event_id}/attendees/`, { page });
    return textResult(data);
  }
);

server.registerTool(
  "list_orders",
  {
    title: "List orders for an event",
    description: "List orders (purchases) placed for an Eventbrite event.",
    inputSchema: {
      event_id: z.string().describe("Eventbrite event ID"),
      page: z.number().int().positive().optional().describe("Page number for pagination"),
    },
  },
  async ({ event_id, page }) => {
    const data = await eventbriteGet(`/events/${event_id}/orders/`, { page });
    return textResult(data);
  }
);

server.registerTool(
  "get_order",
  {
    title: "Get order details",
    description: "Get full details for a single Eventbrite order by ID.",
    inputSchema: {
      order_id: z.string().describe("Eventbrite order ID"),
    },
  },
  async ({ order_id }) => {
    const data = await eventbriteGet(`/orders/${order_id}/`);
    return textResult(data);
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("mcp-eventbrite running on stdio");
}

main().catch((error) => {
  console.error("Fatal error starting mcp-eventbrite:", error);
  process.exit(1);
});
