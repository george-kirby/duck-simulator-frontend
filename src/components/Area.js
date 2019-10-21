import React from "react"
import Helpers from "../helpers/Helpers"
import Images from "../helpers/ImagePaths"

const Area = ({ name, image_url, selectArea }) => {
  const displayImage = Helpers.displayImage(
    "areas",
    Images.areas.flatironPond,
    Images.areas.flatironPond
  )

  return (
    <li onClick={selectArea}>
      <img src={displayImage} width="20%" alt={name} />
      {name}
    </li>
  )
}

export default Area
