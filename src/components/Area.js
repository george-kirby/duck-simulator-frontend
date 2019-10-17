import React from "react";

const Area = ({ name, image_url }) => {
  return (
    <li>
      {image_url !== "" ? (
        <img src={require(`../images/${image_url}`)} width="20%" alt={name} />
      ) : (
        <img
          src={require(`../images/area-template.png`)}
          width="2%"
          alt="area template"
        />
      )}{" "}
      {name}
    </li>
  );
};

export default Area;