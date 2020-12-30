import * as React from "react"
import Navbar from "./navbar"

const AppShell = ({ children }) => {
  return (
    <div className="app-shell">
      <Navbar />
      {children}
    </div>
  )
}

export default AppShell
