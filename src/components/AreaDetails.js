import React from "react"
import AreaDuckList from "../containers/AreaDuckList"
import "../stylesheets/AreaDetails.css"
import Helpers from "../helpers/Helpers"

const AreaDetails = ({
  name,
  image_url,
  removeCurrentArea,
  ducks,
  handleClickAreaDuck,
  currentDuck
}) => {
  const backgroundImg = Helpers.displayImage(
    "areas",
    "flatiron-pond.png",
    image_url
  )

  const divStyle = {
    backgroundImage: `url(${backgroundImg})`,
    height: "755px"
  }

  return (
    <div className="area-details" style={divStyle}>
      {name}
      <button onClick={removeCurrentArea}>Back to Area List</button>
      <AreaDuckList {...{ ducks, handleClickAreaDuck, currentDuck }} />
    </div>
  )
}

export default AreaDetails
