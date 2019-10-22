import React from "react"
import AreaDuckList from "../containers/AreaDuckList"
import "../stylesheets/AreaDetails.css"
import Helpers from "../helpers/Helpers"

const AreaDetails = ({
  name,
  image_url,
  removeCurrentArea,
  ducks,
  handleClickAreaDuck
}) => {
  const backgroundImg = Helpers.displayImage(
    "areas",
    "flatiron-pond.png",
    image_url
  )

  const divStyle = {
    backgroundImage: `url(${backgroundImg})`,
    height: "600px"
  }

  return (
    <div className="area-details" style={divStyle}>
      {/* <div className="area-details"> */}
      {name}
      <button onClick={removeCurrentArea}>Back to Area List</button>
      <AreaDuckList {...{ ducks, handleClickAreaDuck }} />
    </div>
  )
}

export default AreaDetails
