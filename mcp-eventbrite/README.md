# mcp-eventbrite

A read-only [MCP](https://modelcontextprotocol.io) server that lets Claude query your Eventbrite
organization: events, ticket classes, attendees, and orders. Useful for pulling participant/order
data (e.g. Tour de Frankie registrations) directly into a conversation instead of exporting CSVs.

## Tools

- `list_organizations` — list Eventbrite organizations you belong to
- `list_events` — list events for an organization (optionally filtered by status)
- `get_event` — get details for one event
- `list_ticket_classes` — list ticket types for an event
- `list_attendees` — list attendees/registrants for an event
- `list_orders` — list orders for an event
- `get_order` — get details for one order

All tools are read-only; nothing here can modify your Eventbrite account.

## Setup

1. Get a private token from your Eventbrite account: **Account Settings → Developer Links → API
   Keys** (or https://www.eventbrite.com/platform/api-keys). Copy the "Private token".

2. Install and build:

   ```bash
   cd mcp-eventbrite
   npm install
   npm run build
   ```

3. Register the server with Claude Code:

   ```bash
   claude mcp add eventbrite \
     --env EVENTBRITE_TOKEN=your_private_token_here \
     -- node /absolute/path/to/mcp-eventbrite/build/index.js
   ```

   Or add it manually to your MCP config (e.g. `.mcp.json` / Claude Desktop config):

   ```json
   {
     "mcpServers": {
       "eventbrite": {
         "command": "node",
         "args": ["/absolute/path/to/mcp-eventbrite/build/index.js"],
         "env": {
           "EVENTBRITE_TOKEN": "your_private_token_here"
         }
       }
     }
   }
   ```

4. Restart Claude Code / Claude Desktop. Ask something like "list my Eventbrite organizations" to
   confirm it's connected, then "list events for organization X" to find event IDs for the other
   tools.

Keep your private token out of version control — pass it via `--env` / the MCP config's `env`
block rather than committing it to a file in this repo.
