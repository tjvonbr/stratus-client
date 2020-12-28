import * as React from "react"

const AppShell = ({ children }) => {
  return (
    <div className="app-shell">
      <h1 className="app-shell-header">layer</h1>
      {children}
    </div>
  )
}

export default AppShell
