const airportData = {
  airportName: "Demo International Airport",
  analysisDate: "Synthetic operating day",
  assumptions: {
    emissionFactorKgPerIdleMinute: 0.3,
    recommendedIdleThresholdMinutes: 30
  },
  vehicles: [
    { id: "GV-101", type: "Baggage Tractor", zone: "Terminal A", idleMinutes: 120, activeHours: 7.5 },
    { id: "GV-102", type: "Passenger Steps", zone: "Terminal A", idleMinutes: 82, activeHours: 6.8 },
    { id: "GV-103", type: "Catering Truck", zone: "Terminal B", idleMinutes: 74, activeHours: 8.1 },
    { id: "GV-104", type: "Belt Loader", zone: "Terminal B", idleMinutes: 58, activeHours: 7.2 },
    { id: "GV-105", type: "Service Van", zone: "Cargo Apron", idleMinutes: 44, activeHours: 5.9 },
    { id: "GV-106", type: "Pushback Tug", zone: "Terminal A", idleMinutes: 28, activeHours: 8.4 }
  ]
};

export default airportData;
