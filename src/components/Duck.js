import React from "react";
import "../stylesheets/Duck.css";

const Duck = ({ name, image_url, mood, selectDuck }) => {
  return (
    <li className="duck-li" onClick={selectDuck}>
      {image_url !== "" ? (
        <img src={require(`../images/${image_url}`)} width="5%" alt={name} />
      ) : (
        <img
          src={require(`../images/duck-template.jpg`)}
          width="5%"
          alt="duck template"
        />
      )}{" "}
      {name} - {mood}
    </li>
  );
};

export default Duck;
