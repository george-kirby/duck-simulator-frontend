import React from "react"
import "../stylesheets/Duck.css"
import Helpers from "../helpers/Helpers"
import Images from "../helpers/ImagePaths"

const Duck = ({ name, image_url, mood, selectDuck }) => {

  const displayImage = Helpers.displayImage("duck-drawings", Images.ducks.standardDuck, Images.ducks[mood])

  return (
    <li className="duck-li" onClick={selectDuck}>
      <img src={displayImage} width="10%" alt={name} />
      {name} - {mood}
    </li>
  )
}

export default Duck
