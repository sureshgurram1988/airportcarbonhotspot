export default function Assumptions({ analysis }) {
  return (
    <section className="panel assumptions">
      <span className="eyebrow">TRANSPARENT ASSUMPTIONS</span>
      <h2>How the estimate is calculated</h2>
      <div className="formula">
        Idle minutes × {analysis.assumptions.emissionFactorKgPerIdleMinute} kg CO₂/minute = estimated idle emissions
      </div>
      <ul>
        <li>All airport, vehicle and emissions values are synthetic.</li>
        <li>The analysis focuses on one source only: ground-support vehicle idling.</li>
        <li>The recommended idle threshold is {analysis.assumptions.recommendedIdleThresholdMinutes} minutes per vehicle per shift.</li>
        <li>The result is a POC estimate, not a certified carbon inventory.</li>
      </ul>
    </section>
  );
}
