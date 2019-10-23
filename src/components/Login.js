import React from "react"
import "../stylesheets/Login.css"

function Login({ handleLogin }) {
  return (
    <div className="login-container">
      <div id="login-form-container">
        <form onSubmit={handleLogin}>
          <input type="text" name="username" placeholder="Your username" />
          <input className="submit-button" type="submit" value="Enter" />
        </form>
      </div>
      <div className="duck-images">
        <img
          src={require("../images/duck-drawings/football-duck.png")}
          alt="football-duck"
        />
        <img
          src={require("../images/duck-drawings/french-duck.png")}
          alt="french-duck"
        />
        <img
          src={require("../images/duck-drawings/party-duck.png")}
          alt="party-duck"
        />
        <img
          src={require("../images/duck-drawings/smart-duck.png")}
          alt="smart-duck"
        />
        <img
          src={require("../images/duck-drawings/lawyer-duck.png")}
          alt="smart-duck"
        />
      </div>
    </div>
  )
}

export default Login
