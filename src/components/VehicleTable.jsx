export default function VehicleTable({ vehicles }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Vehicle</th><th>Type</th><th>Zone</th><th>Idle time</th><th>Estimated CO₂</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td><strong>{vehicle.id}</strong></td>
              <td>{vehicle.type}</td>
              <td>{vehicle.zone}</td>
              <td>{vehicle.idleMinutes} min</td>
              <td>{vehicle.currentEmissions.toFixed(1)} kg</td>
              <td><span className={`status ${vehicle.exceedsThreshold ? "high" : "normal"}`}>{vehicle.exceedsThreshold ? "Review" : "Within limit"}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
