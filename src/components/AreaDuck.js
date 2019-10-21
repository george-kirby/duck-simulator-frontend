import React, { useState } from "react"
import "../stylesheets/AreaDuck.css"
import Helpers from "../helpers/Helpers"
import Images from "../helpers/ImagePaths"

const AreaDuck = ({ name, image_url }) => {
  const [duckNameClass, setDuckNameClass] = useState("hidden")

  const displayImage = Helpers.displayImage(
    "duck-drawings",
    Images.ducks.standard,
    Images.ducks.standard
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
      ></img>
    </div>
  )
}

export default AreaDuck
