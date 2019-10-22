import React, { useState } from "react"
import "../stylesheets/AreaDuck.css"
import Helpers from "../helpers/Helpers"
import Images from "../helpers/ImagePaths"

const AreaDuck = ({
  id,
  name,
  color,
  handleClickAreaDuck,
  mood,
  currentDuck
}) => {
  const [duckNameClass, setDuckNameClass] = useState("hidden")

  const displayImage = Helpers.displayImage(
    "duck-drawings",
    Images.ducks.standard,
    `${color}-${Images.ducks[mood]}`
  )

  const isCurrentDuck = () => currentDuck !== null && currentDuck.id === id

  return (
    <div className="duck-container">
      {name}
      <img
        src={displayImage}
        alt={name}
        width="90%"
        onClick={() => handleClickAreaDuck(id)}
        className={isCurrentDuck() ? "duck-selected" : ""}
      ></img>
    </div>
  )
}

export default AreaDuck
