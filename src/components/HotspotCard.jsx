export default function HotspotCard({ analysis }) {
  const { hotspot } = analysis;
  return (
    <article className="result-card hotspot-card">
      <span className="eyebrow danger">HOTSPOT DETECTED</span>
      <h2>Excess ground-vehicle idling</h2>
      <p>
        <strong>{hotspot.id}</strong> creates the largest avoidable contribution in this synthetic dataset.
      </p>
      <div className="metric-row"><span>Vehicle</span><strong>{hotspot.type}</strong></div>
      <div className="metric-row"><span>Current idle time</span><strong>{hotspot.idleMinutes} min</strong></div>
      <div className="metric-row"><span>Avoidable emissions</span><strong>{hotspot.avoidableEmissions.toFixed(1)} kg CO₂</strong></div>
      <div className="why-box">Why flagged: idle time is {hotspot.idleMinutes - analysis.assumptions.recommendedIdleThresholdMinutes} minutes above the POC threshold.</div>
    </article>
  );
}
