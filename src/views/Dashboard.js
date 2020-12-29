import * as React from "react"
import AppShell from "../components/app-shell"
import Metric from "../components/metric"

const Dashboard = () => {
  return (
    <AppShell>
      <div className="dashboard-flex-center">
        <div className="dashboard-grid">
          <Metric number={183.8} title="Weight" unit="LBS" />
          <Metric number={51} title="Water" unit="%" />
          <Metric number={43} title="Lean Mass" unit="%" />
          <Metric number={21} title="BMI" />
          <Metric number={43} title="Heart Rate" unit="BPM" />
          <Metric number={15.4} title={"Body Fat"} unit="%" />
        </div>
      </div>
    </AppShell>
  )
}

export default Dashboard
