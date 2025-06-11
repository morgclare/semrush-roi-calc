
import { useState } from 'react'

function App() {
  const [dealValue, setDealValue] = useState(50000)
  const [conversionRate, setConversionRate] = useState(0.02)
  const [monthlyTrafficShift, setMonthlyTrafficShift] = useState(500)

  const annualTraffic = monthlyTrafficShift * 12
  const annualConversions = annualTraffic * conversionRate
  const annualRevenueImpact = annualConversions * dealValue

  return (
    <div style={{ maxWidth: 500, margin: 'auto', fontFamily: 'Arial' }}>
      <h2>Semrush ROI Calculator</h2>
      <label>Average Deal Value ($)</label>
      <input type='number' value={dealValue} onChange={(e) => setDealValue(Number(e.target.value))} /><br />
      <label>Conversion Rate (%)</label>
      <input type='number' value={conversionRate} step='0.01' onChange={(e) => setConversionRate(Number(e.target.value))} /><br />
      <label>Monthly Traffic Gained</label>
      <input type='number' value={monthlyTrafficShift} onChange={(e) => setMonthlyTrafficShift(Number(e.target.value))} /><br />
      <h3>Estimated Annual Revenue Impact:</h3>
      <p style={{ fontSize: 24, color: 'green' }}>
        ${annualRevenueImpact.toLocaleString(undefined, { maximumFractionDigits: 0 })}
      </p>
    </div>
  )
}

export default App
