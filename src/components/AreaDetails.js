import React from "react"
import AreaDuckList from "../containers/AreaDuckList"
import "../stylesheets/AreaDetails.css"
import Helpers from "../helpers/Helpers"
import Images from "../helpers/ImagePaths"

const AreaDetails = ({ name, image_url, removeCurrentArea, ducks }) => {
  const backgroundImg = Helpers.displayImage(
    "areas",
    Images.areas.flatironPond,
    Images.areas.flatironPond
  )

  const divStyle = {
    backgroundImage: `url(${backgroundImg})`,
    height: "500px"
  }

  return (
    <div className="area-details" style={divStyle}>
      {/* <div className="area-details"> */}
      <h1>{name}</h1>
      <button onClick={removeCurrentArea}>Back to Area List</button>
      <AreaDuckList {...{ ducks }} />
    </div>
  )
}

export default AreaDetails
