import * as React from "react"

const Metric = ({ number, title, unit }) => {
  return (
    <div className="metric-container">
      <div className="number-wrapper">
        <p className="number">{number}</p>
        <p className="units">{unit}</p>
      </div>
      <div className="title-wrapper">
        <h3 className="title">{title}</h3>
      </div>
    </div>
  )
}

export default Metric
