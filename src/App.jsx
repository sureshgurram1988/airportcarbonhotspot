import { useMemo, useState } from "react";
import airportData from "./data/airportData";
import { analyzeVehicleIdling } from "./utils/emissionCalculator";
import Header from "./components/Header";
import KpiCards from "./components/KpiCards";
import VehicleTable from "./components/VehicleTable";
import HotspotCard from "./components/HotspotCard";
import RecommendationCard from "./components/RecommendationCard";
import EmissionChart from "./components/EmissionChart";
import Assumptions from "./components/Assumptions";

export default function App() {
  const [analyzed, setAnalyzed] = useState(false);
  const analysis = useMemo(() => analyzeVehicleIdling(airportData), []);

  return (
    <div className="app-shell">
      <Header />
      <main className="container">
        <section className="hero">
          <div>
            <span className="eyebrow">SYNTHETIC OPERATIONS ANALYSIS</span>
            <h1>Find one avoidable airport emissions hotspot</h1>
            <p>
              Analyze ground-support vehicle idling, explain the calculation,
              and simulate the impact of one operational intervention.
            </p>
          </div>
          <button className="primary-button" onClick={() => setAnalyzed(true)}>
            {analyzed ? "Analysis Complete" : "Analyze Operations"}
          </button>
        </section>

        <KpiCards analysis={analysis} analyzed={analyzed} />

        <section className="panel">
          <div className="section-heading">
            <div>
              <span className="eyebrow">MOCK DATA</span>
              <h2>Ground vehicle activity</h2>
            </div>
            <span className="data-badge">Synthetic data only</span>
          </div>
          <VehicleTable vehicles={analysis.vehicles} />
        </section>

        {!analyzed ? (
          <section className="empty-state">
            <div className="empty-icon">CO₂</div>
            <h2>Ready to analyze</h2>
            <p>Click “Analyze Operations” to detect the highest avoidable emissions hotspot.</p>
          </section>
        ) : (
          <>
            <section className="results-grid">
              <HotspotCard analysis={analysis} />
              <RecommendationCard analysis={analysis} />
            </section>
            <EmissionChart analysis={analysis} />
            <Assumptions analysis={analysis} />
          </>
        )}
      </main>
      <footer>
        POC only • No operational control-system connection • No safety procedure changes
      </footer>
    </div>
  );
}
