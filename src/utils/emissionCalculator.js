const round = (value) => Math.round(value * 10) / 10;

export function analyzeVehicleIdling(data) {
  const factor = data.assumptions.emissionFactorKgPerIdleMinute;
  const threshold = data.assumptions.recommendedIdleThresholdMinutes;

  const vehicles = data.vehicles.map((vehicle) => {
    const currentEmissions = vehicle.idleMinutes * factor;
    const projectedIdleMinutes = Math.min(vehicle.idleMinutes, threshold);
    const projectedEmissions = projectedIdleMinutes * factor;
    const avoidableEmissions = currentEmissions - projectedEmissions;

    return {
      ...vehicle,
      currentEmissions: round(currentEmissions),
      projectedIdleMinutes,
      projectedEmissions: round(projectedEmissions),
      avoidableEmissions: round(avoidableEmissions),
      exceedsThreshold: vehicle.idleMinutes > threshold
    };
  });

  const totalCurrent = vehicles.reduce((sum, item) => sum + item.currentEmissions, 0);
  const totalProjected = vehicles.reduce((sum, item) => sum + item.projectedEmissions, 0);
  const totalSavings = totalCurrent - totalProjected;
  const hotspot = [...vehicles].sort((a, b) => b.avoidableEmissions - a.avoidableEmissions)[0];

  return {
    ...data,
    vehicles,
    hotspot,
    totalCurrent: round(totalCurrent),
    totalProjected: round(totalProjected),
    totalSavings: round(totalSavings),
    reductionPercent: totalCurrent ? round((totalSavings / totalCurrent) * 100) : 0,
    vehiclesAboveThreshold: vehicles.filter((item) => item.exceedsThreshold).length
  };
}
