import React from "react";
import AreaDuck from './AreaDuck'

const AreaDetails = ({ name, image_url}) => {

  // const displayImage = () => {
  //   if (image_url === "") return require(`../images/area-template.png`)
  // }
  
  // (image_url !== "" ? (
  //       require(`../images/${image_url}`)} width="100%" alt={name} />
  //     ) : src={require(`../images/area-template.png`)}
  //       />
  //     ))

  // const path = "../images/area-template.png"
  const path = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Staw_naturalny.JPG/360px-Staw_naturalny.JPG"

  const divStyle = {backgroundImage: 'url('+path+')',
  backgroundSize: "100%"}

  return <div style={divStyle}>
    {name}
    {" "}
      <AreaDuck/>
  </div>;
};

export default AreaDetails;