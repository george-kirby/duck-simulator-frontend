import React from "react"
import Helpers from "../helpers/Helpers"
import "../stylesheets/Area.css"

const Area = ({ name, image_url, selectArea }) => {
  const displayImage = Helpers.displayImage(
    "areas",
    "flatiron-pond.png",
    image_url
  )

  return (
    <div className="area-card" onClick={selectArea}>
      <img src={displayImage} width="20%" alt={name} />
      {name}
    </div>
  )
}

export default Area
