import * as React from "react"
import Dashboard from "./views/Dashboard"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./styles/main.scss"

function App() {
  return (
    <Router>
      <Route exact path="/" component={Dashboard} />
    </Router>
  );
}

export default App;
