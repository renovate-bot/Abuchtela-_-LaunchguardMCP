const sampleLaunches = [
  {
    symbol: 'MOONBASE',
    address: '0x7a8f...91c2',
    age: '11 minutes',
    liquidity: '$8.4k',
    score: 82,
    warning: 'Very new launch with thin liquidity. Use demo-sized amounts only.'
  },
  {
    symbol: 'BUILDER',
    address: '0x31cd...0a55',
    age: '43 minutes',
    liquidity: '$42k',
    score: 48,
    warning: 'Better liquidity, but still speculative and early.'
  },
  {
    symbol: 'BASECAT',
    address: '0x9fa2...7741',
    age: '6 minutes',
    liquidity: '$1.1k',
    score: 94,
    warning: 'Avoid: extremely new and very low liquidity.'
  }
];

const steps = [
  'Discover new Base launches using native or custom MCP plugin flows.',
  'Run LaunchGuard risk checks before any transaction is prepared.',
  'Explain risk in plain English so beginners know what they are approving.',
  'Prepare a tiny Base action only after the user explicitly asks.',
  'Require Base MCP / wallet approval before anything happens onchain.'
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div>
          <div className="badge">Base MCP Challenge Demo</div>
          <h1>Safer agentic token discovery on Base.</h1>
          <p className="lede">
            LaunchGuard MCP turns an AI assistant into a cautious onchain scout. It can find fresh Base launches, explain what looks risky, and prepare a tiny action only after the user approves.
          </p>
          <a className="button" href="/api/analyze" target="_blank">
            View sample risk API
          </a>
        </div>

        <div className="card">
          <h2>Live demo story</h2>
          <p className="muted">
            The agent does not secretly trade. It analyzes first, warns clearly, then asks for approval.
          </p>
          <div className="steps">
            {steps.map((step, index) => (
              <div className="step" key={step}>
                <span>{index + 1}</span>
                <div>{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid">
        <div className="card">
          <div className="metric">3 min</div>
          <div className="muted">Built for a short bounty demo video.</div>
        </div>
        <div className="card">
          <div className="metric">100%</div>
          <div className="muted">Human approval required before write actions.</div>
        </div>
        <div className="card">
          <div className="metric">0 hype</div>
          <div className="muted">Plain risk notes instead of fake guarantees.</div>
        </div>
      </section>

      <section className="card" style={{ marginTop: 32 }}>
        <h2>Sample launch scan</h2>
        <p className="muted">These are demo entries showing the expected LaunchGuard output.</p>
        {sampleLaunches.map((launch) => (
          <div className="risk" key={launch.address}>
            <div>
              <strong>{launch.symbol}</strong>
              <div className="muted">{launch.address} · age {launch.age} · liquidity {launch.liquidity}</div>
              <div>{launch.warning}</div>
            </div>
            <div className="score">{launch.score}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
