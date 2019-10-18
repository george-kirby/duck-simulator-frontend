import React from "react";
import AreaDuck from "./AreaDuck";
import "../stylesheets/AreaDetails.css";

const AreaDetails = ({ name, image_url }) => {
  const displayImage = () => {
    return image_url !== ""
      ? require(`../images/${image_url}`)
      : require("../images/area-template.png");
  };

  const backgroundImg = displayImage();

  const divStyle = {
    backgroundImage: `url(${backgroundImg})`,
    height: "500px"
  };

  return (
    <div className="area-details" style={divStyle}>
      <h1>{name}</h1>
      <AreaDuck />
    </div>
  );
};

export default AreaDetails;
