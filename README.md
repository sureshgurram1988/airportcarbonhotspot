# Airport Carbon Hotspot Finder POC

A browser-based React proof of concept that analyzes synthetic airport ground-vehicle data and identifies one avoidable CO2 hotspot.

## Run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## POC flow

1. Load synthetic ground-vehicle operations data.
2. Calculate current idling emissions.
3. Flag avoidable idle time above the permitted operational threshold.
4. Identify the highest avoidable emissions hotspot.
5. Recommend one intervention: reduce non-essential idling to the threshold.
6. Show simulated before-and-after emissions and savings.

## Transparent assumptions

- The dataset is synthetic.
- The POC focuses only on ground-support vehicle idling.
- Emissions are estimated as idle minutes multiplied by a synthetic factor of 0.30 kg CO2 per minute.
- The operational threshold is 30 idle minutes per shift.
- The proposed action does not control equipment and must not override safety procedures.
- This is a demonstration model, not a certified emissions inventory.
