import React from "react"
import Helpers from "../helpers/Helpers"

const Area = ({ name, image_url, selectArea }) => {
  const displayImage = Helpers.displayImage(
    "areas",
    "flatiron-pond.png",
    image_url
  )

  return (
    <li onClick={selectArea}>
      <img src={displayImage} width="20%" alt={name} />
      {name}
    </li>
  )
}

export default Area
