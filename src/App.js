import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "./stylesheets/App.css"
import Main from "./components/Main"
import AddDuck from "./components/AddDuck"

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">HOME</Link> | <Link to="/add-duck">ADD DUCK</Link> |{" "}
        <Link to="/login">LOG OUT</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/add-duck">
          <AddDuck />
        </Route>
        <Route exact path="/login">
          You are logged out
        </Route>
      </Switch>
    </Router>
  )
}

export default App
