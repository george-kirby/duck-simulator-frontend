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
    backgroundImage: `url(${backgroundImg})`
  }

  return (
    <div className="area-details">
      <div className="area-details-header">
        <img
          src={require("../images/theme/back-button.png")}
          alt="back-button"
          onClick={removeCurrentArea}
          style={{ width: "2rem", height: "2rem" }}
        />
        <h3>{name}</h3>
      </div>
      <div className="area-background" style={divStyle}>
        <AreaDuckList {...{ ducks, handleClickAreaDuck, currentDuck }} />
      </div>
    </div>
  )
}

export default AreaDetails
