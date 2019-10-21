import React, { useState } from "react"
import "../stylesheets/AreaDuck.css"
import Helpers from "../helpers/Helpers"
import Images from "../helpers/ImagePaths"

const AreaDuck = ({ id, name, color, handleClickAreaDuck, mood }) => {
  const [duckNameClass, setDuckNameClass] = useState("hidden")

  const displayImage = Helpers.displayImage(
    "duck-drawings",
    Images.ducks.standard,
    `${color}-${Images.ducks[mood]}`
  )

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
        src={displayImage}
        alt={name}
        width="90%"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClickAreaDuck(id)}
      ></img>
    </div>
  )
}

export default AreaDuck
