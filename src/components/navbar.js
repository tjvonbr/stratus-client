import * as React from "react"
import User from "./user"

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <h1 className="app-shell-header">Layer</h1>
      <User />
    </nav>
  )
}

export default Navbar
