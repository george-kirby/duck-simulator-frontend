import React from "react"
import AreaDuckList from "../containers/AreaDuckList"
import "../stylesheets/AreaDetails.css"

const AreaDetails = ({ name, image_url, removeCurrentArea, ducks }) => {
  const displayImage = () => {
    return image_url !== ""
      ? require(`../images/${image_url}`)
      : require("../images/area-template.png")
  }

  const backgroundImg = displayImage()

  const divStyle = {
    backgroundImage: `url(${backgroundImg})`,
    height: "500px"
  }

  return (
    <div className="area-details" style={divStyle}>
      <h1>{name}</h1>
      <button onClick={removeCurrentArea}>Back to Area List</button>
      <AreaDuckList {...{ ducks }} />
    </div>
  )
}

export default AreaDetails
