import React from "react"
import "../stylesheets/Login.css"

function Login({ handleLogin }) {
  return (
    <div id="login-form-container">
      <form onSubmit={handleLogin}>
        <input type="text" name="username" placeholder="Your username" /><br/>
        <input type="submit" value="Enter"/>
      </form>
    </div>
  )
}

export default Login
