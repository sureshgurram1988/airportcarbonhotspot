export default function RecommendationCard({ analysis }) {
  const threshold = analysis.assumptions.recommendedIdleThresholdMinutes;
  return (
    <article className="result-card recommendation-card">
      <span className="eyebrow success">ONE RECOMMENDATION</span>
      <h2>Reduce non-essential idling</h2>
      <p>
        Introduce an operational reminder to switch off eligible ground vehicles when non-essential idling would exceed {threshold} minutes.
      </p>
      <div className="recommendation-impact">
        <div><small>Before</small><strong>{analysis.totalCurrent.toFixed(1)} kg</strong></div>
        <div className="arrow">→</div>
        <div><small>After</small><strong>{analysis.totalProjected.toFixed(1)} kg</strong></div>
      </div>
      <div className="safety-note">Safety boundary: apply only when operationally permitted. Do not alter aviation safety procedures.</div>
    </article>
  );
}
