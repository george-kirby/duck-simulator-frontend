import React, { useState } from "react"
import "../stylesheets/AreaDuck.css"

const AreaDuck = ({ name, image_url }) => {
  const [duckNameClass, setDuckNameClass] = useState("hidden")

  const handleMouseOver = () => {
    setDuckNameClass("visible")
  }

  const handleMouseLeave = () => {
    setDuckNameClass("hidden")
  }

  return (
    <div className="duck-container">
      <div className={duckNameClass}>{name}</div>
      <img
        // src={require(`../images/${image_url}`)}
        alt={name}
        width="90%"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      ></img>
    </div>
  )
}

export default AreaDuck
