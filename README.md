# LaunchGuard MCP

**LaunchGuard MCP** is a Base MCP demo project for safer agentic token discovery on Base.

It shows how an AI assistant can:

- discover new Base token launches,
- explain risk in plain English,
- score launches before action,
- prepare a tiny onchain action only after user confirmation,
- keep the human in control through Base MCP approval flows.

> This is a demo for the Base MCP challenge. It is not financial advice and does not recommend buying tokens.

## Demo idea

LaunchGuard MCP acts like a safety layer between a user and fast-moving onchain launches. Instead of letting an AI blindly trade, it turns the AI into a scout:

1. Find recent Base launches.
2. Run LaunchGuard risk checks.
3. Show what looks dangerous.
4. Pick a tiny demo-sized action.
5. Require user approval before any transaction.

## Project structure

```txt
app/
  api/analyze/route.ts      Risk scoring API route
  globals.css               Simple demo styling
  layout.tsx                App shell
  page.tsx                  Demo UI
plugins/
  launchguard-risk-scout.md Custom MCP plugin spec
scripts/
  demo-prompts.md           Prompts for the demo video
```

## Run locally

```bash
npm install
npm run dev
```

Then open:

```txt
http://localhost:3000
```

## Demo video hook

> I built LaunchGuard MCP for the Base MCP challenge. It helps users discover new Base launches without blindly trusting an AI bot with their wallet.

## Safety rule

LaunchGuard MCP should never silently execute trades. It should analyze, explain, and prepare actions only when the user explicitly asks. Any onchain write action must require user approval.
