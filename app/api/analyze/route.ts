import { NextResponse } from 'next/server';

type Launch = {
  symbol: string;
  address: string;
  ageMinutes: number;
  liquidityUsd: number;
  holderConcentrationPct: number;
  socialSignal: number;
};

const demoLaunches: Launch[] = [
  {
    symbol: 'MOONBASE',
    address: '0x7a8f0000000000000000000000000000000091c2',
    ageMinutes: 11,
    liquidityUsd: 8400,
    holderConcentrationPct: 43,
    socialSignal: 72
  },
  {
    symbol: 'BUILDER',
    address: '0x31cd000000000000000000000000000000000a55',
    ageMinutes: 43,
    liquidityUsd: 42000,
    holderConcentrationPct: 22,
    socialSignal: 61
  },
  {
    symbol: 'BASECAT',
    address: '0x9fa2000000000000000000000000000000007741',
    ageMinutes: 6,
    liquidityUsd: 1100,
    holderConcentrationPct: 67,
    socialSignal: 88
  }
];

function scoreLaunch(launch: Launch) {
  let score = 0;
  const warnings: string[] = [];

  if (launch.ageMinutes < 10) {
    score += 30;
    warnings.push('Extremely new launch. Price and liquidity can move violently.');
  } else if (launch.ageMinutes < 60) {
    score += 18;
    warnings.push('Very new launch. Treat as high risk.');
  }

  if (launch.liquidityUsd < 2_500) {
    score += 35;
    warnings.push('Very low liquidity. A small buy or sell can move the market.');
  } else if (launch.liquidityUsd < 10_000) {
    score += 24;
    warnings.push('Thin liquidity. Use demo-sized amounts only.');
  } else if (launch.liquidityUsd < 50_000) {
    score += 12;
    warnings.push('Moderate liquidity, but still risky for new launches.');
  }

  if (launch.holderConcentrationPct > 60) {
    score += 25;
    warnings.push('High holder concentration. A small group may control supply.');
  } else if (launch.holderConcentrationPct > 35) {
    score += 15;
    warnings.push('Some concentration risk detected.');
  }

  if (launch.socialSignal > 80 && launch.liquidityUsd < 10_000) {
    score += 10;
    warnings.push('Hype is higher than available liquidity.');
  }

  const riskScore = Math.min(score, 100);

  return {
    ...launch,
    riskScore,
    rating: riskScore >= 85 ? 'avoid' : riskScore >= 65 ? 'high risk' : riskScore >= 40 ? 'medium risk' : 'lower risk',
    maxDemoAmountUsd: riskScore >= 85 ? 0 : riskScore >= 65 ? 0.5 : 1,
    warnings
  };
}

export async function GET() {
  const analyzed = demoLaunches.map(scoreLaunch).sort((a, b) => a.riskScore - b.riskScore);

  return NextResponse.json({
    name: 'LaunchGuard MCP Risk Scout',
    chain: 'Base',
    actionRule: 'Analyze first. Never execute trades silently. Require user approval for every write action.',
    launches: analyzed
  });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const launches = Array.isArray(body?.launches) ? body.launches : demoLaunches;

  return NextResponse.json({
    name: 'LaunchGuard MCP Risk Scout',
    chain: 'Base',
    actionRule: 'Analyze first. Never execute trades silently. Require user approval for every write action.',
    launches: launches.map(scoreLaunch).sort((a: ReturnType<typeof scoreLaunch>, b: ReturnType<typeof scoreLaunch>) => a.riskScore - b.riskScore)
  });
}
