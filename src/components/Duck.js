import React from "react"
import "../stylesheets/Duck.css"
import Helpers from "../helpers/Helpers"
import Images from "../helpers/ImagePaths"

const Duck = ({ name, mood, color, selectDuck }) => {
  const displayImage = Helpers.displayImage(
    "duck-drawings",
    Images.ducks.standardDuck,
    `${color}-${Images.ducks[mood]}`
  )

  return (
    <div className="duck-card" onClick={selectDuck}>
      <img src={displayImage} alt={name} />
      <div>{name}</div>
    </div>
  )
}

export default Duck
