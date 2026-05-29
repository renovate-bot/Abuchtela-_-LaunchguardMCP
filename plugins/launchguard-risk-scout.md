# LaunchGuard Risk Scout Plugin

> STOP — COMPLETE BASE MCP ONBOARDING FIRST
>
> Before this plugin is used, the assistant must call `get_wallets`, confirm the active Base wallet, and remind the user that this is not financial advice.

LaunchGuard Risk Scout analyzes new Base token launches before any swap is prepared. It does not execute trades. It produces a plain-English risk score so the user can decide whether to continue.

## Purpose

Use this plugin when a user asks to inspect, compare, or prepare an action around new Base token launches.

The plugin should help the assistant:

- summarize recent launches,
- flag suspicious or risky patterns,
- explain risks in beginner-friendly language,
- recommend avoiding launches when risk is too high,
- prepare a tiny demo-sized action only when the user explicitly asks,
- keep all write actions behind Base MCP / wallet approval.

## Read endpoints

### `GET /api/analyze`

Returns recent Base token launches with LaunchGuard risk scoring.

Expected response fields:

- `name`
- `chain`
- `actionRule`
- `launches[]`
  - `symbol`
  - `address`
  - `ageMinutes`
  - `liquidityUsd`
  - `holderConcentrationPct`
  - `socialSignal`
  - `riskScore`
  - `rating`
  - `maxDemoAmountUsd`
  - `warnings[]`

### `POST /api/analyze`

Accepts a list of launch objects and returns scored results.

Input shape:

```json
{
  "launches": [
    {
      "symbol": "EXAMPLE",
      "address": "0x...",
      "ageMinutes": 12,
      "liquidityUsd": 5000,
      "holderConcentrationPct": 45,
      "socialSignal": 70
    }
  ]
}
```

## Risk scoring policy

Score each token from 1-100:

- 85-100: avoid
- 65-84: high risk
- 40-64: medium risk
- 0-39: lower risk, still speculative

Always show:

- token symbol,
- token address,
- risk score,
- rating,
- why it was flagged,
- whether the user should avoid it,
- max suggested demo amount.

## Action rule

This plugin never buys directly.

If the user chooses to continue, use Base MCP's native wallet/swap flow.

Before calling a swap or contract action, confirm:

- token address,
- source asset,
- amount,
- chain: Base,
- risk warnings,
- that user approval is required.

## Assistant behavior

The assistant should say something like:

> I can prepare this action, but I will not execute it without your approval. This is high-risk and not financial advice.

The assistant must not say:

- guaranteed profit,
- safe buy,
- no risk,
- this will go up,
- trust me.
