import React, { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  Redirect
} from "react-router-dom"
import "./stylesheets/App.css"
import Main from "./components/Main"
import Login from "./components/Login"
import API from "./adapters/API"
import AddDuck from "./components/AddDuck"

const App = props => {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  const handleLogin = event => {
    event.preventDefault()
    const givenUsername = event.target.username.value
    const findCurrentUser = users.find(user => user.username === givenUsername)
    if (findCurrentUser) {
      setCurrentUser(findCurrentUser)
    } else {
      API.postUser({ username: givenUsername }).then(setCurrentUser)
    }
    props.history.push("/")
  }

  const handleLogout = () => {
    setCurrentUser(null)
    console.log("logging out")
  }

  useEffect(() => {
    API.getUsers().then(setUsers)
  }, [])

  return (
    <div>
      {currentUser ? (
        <nav className="navbar">
          <Link to="/">HOME</Link>
          <Link to="/add-duck">ADD DUCK</Link>
          <div>{`Logged in as ${currentUser.username}`}</div>
          <Link to="/login" onClick={handleLogout}>
            LOG OUT
          </Link>
        </nav>
      ) : (
        <nav><Link to="/login" id="login-link">LOG IN</Link></nav>
      )}
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        {/* {currentUser ? <Main /> : <Login/>} */}
        <Route
          exact
          path="/add-duck"
          component={routerProps => <AddDuck {...routerProps} />}
        />
        <Route exact path="/login">
          <Login {...{ handleLogin }} />
        </Route>
        {/* <Route path="*">
          <Redirect to="/" />
        </Route> */}
      </Switch>
    </div>
  )
}

const AppRouter = withRouter(App)

export default AppRouter
