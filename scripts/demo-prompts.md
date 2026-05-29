# LaunchGuard MCP Demo Prompts

Use these prompts for the under-3-minute Base MCP challenge demo video.

## 0:00-0:15 — Hook

Say:

> I built LaunchGuard MCP for the Base MCP challenge. It helps users discover new Base launches without blindly trusting an AI bot with their wallet.

## 0:15-0:45 — Show Base MCP connected

Prompt:

```txt
Show my Base wallet, USDC balance, and available Base MCP tools. Do not prepare or execute any transaction yet.
```

Say:

> Base MCP lets the assistant help with wallet actions, but write actions still require approval. That means the AI can scout and prepare, but the user stays in control.

## 0:45-1:25 — Discover launches

Prompt:

```txt
Show recent Base token launches. Return symbol, token address, launch age, liquidity estimate, and one plain-English risk note for each. Do not buy anything.
```

## 1:25-2:05 — Run LaunchGuard risk scout

Prompt:

```txt
Run LaunchGuard Risk Scout on these launches. Score each from 1-100 for age risk, liquidity risk, holder concentration risk, and hype/liquidity mismatch. Give me the safest 3 and explain why.
```

## 2:05-2:35 — Prepare tiny demo action

Prompt:

```txt
Prepare a 0.50 USDC demo swap into the lowest-risk option. Before creating the approval request, repeat the token address, amount, chain, and risk warning.
```

Important: You can stop before approval if you do not want to spend anything.

## 2:35-2:55 — Closing line

Say:

> LaunchGuard MCP is a safety layer for agentic onchain discovery. The AI moves fast, but the user stays in control.

## X post draft

```txt
I built LaunchGuard MCP for the @buildonbase Base MCP challenge.

It is an AI safety layer for Base:

→ finds new Base launches
→ runs a custom risk scout
→ explains what looks dangerous
→ prepares a tiny onchain action only after user confirmation
→ Base approval is still required before anything happens

Safer agentic onchain discovery, built on Base MCP.

#Base #BaseMCP #OnchainAI
```
