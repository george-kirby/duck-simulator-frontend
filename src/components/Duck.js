import React from "react";

const Duck = ({ name, image_url, mood, selectDuck }) => {
  return (
    <li className="duck-li" onClick={selectDuck}>
      {image_url !== "" ? (
        <img src={require(`../images/${image_url}`)} width="2%" alt={name} />
      ) : (
        <img
          src={require(`../images/duck-template.jpg`)}
          width="2%"
          alt="duck template"
        />
      )}{" "}
      {name} - {mood}
    </li>
  );
};

export default Duck;
