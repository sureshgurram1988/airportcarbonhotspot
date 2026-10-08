export default function EmissionChart({ analysis }) {
  const beforeWidth = 100;
  const afterWidth = analysis.totalCurrent ? (analysis.totalProjected / analysis.totalCurrent) * 100 : 0;

  return (
    <section className="panel chart-panel">
      <div className="section-heading">
        <div><span className="eyebrow">SIMULATED IMPACT</span><h2>Before and after emissions</h2></div>
        <strong className="saving-pill">−{analysis.totalSavings.toFixed(1)} kg CO₂</strong>
      </div>
      <div className="bar-row">
        <div className="bar-label"><span>Current scenario</span><strong>{analysis.totalCurrent.toFixed(1)} kg</strong></div>
        <div className="bar-track"><div className="bar before" style={{ width: `${beforeWidth}%` }} /></div>
      </div>
      <div className="bar-row">
        <div className="bar-label"><span>Recommended scenario</span><strong>{analysis.totalProjected.toFixed(1)} kg</strong></div>
        <div className="bar-track"><div className="bar after" style={{ width: `${afterWidth}%` }} /></div>
      </div>
      <p className="chart-caption">Estimated reduction: <strong>{analysis.reductionPercent}%</strong> for the synthetic operating shift.</p>
    </section>
  );
}
