const format = (value) => `${value.toFixed(1)} kg`;

export default function KpiCards({ analysis, analyzed }) {
  const cards = [
    { label: "Vehicles analyzed", value: analysis.vehicles.length, meta: "Synthetic fleet records" },
    { label: "Current idle emissions", value: format(analysis.totalCurrent), meta: "Estimated CO₂ per shift" },
    { label: "Above threshold", value: analysis.vehiclesAboveThreshold, meta: `Over ${analysis.assumptions.recommendedIdleThresholdMinutes} idle minutes` },
    { label: "Potential reduction", value: analyzed ? `${analysis.reductionPercent}%` : "—", meta: analyzed ? `${format(analysis.totalSavings)} CO₂ avoided` : "Run analysis to calculate" }
  ];

  return (
    <section className="kpi-grid">
      {cards.map((card) => (
        <article className="kpi-card" key={card.label}>
          <span>{card.label}</span>
          <strong>{card.value}</strong>
          <small>{card.meta}</small>
        </article>
      ))}
    </section>
  );
}
