import React from "react";
import ActionsMenu from "../components/ActionsMenu";

const DuckDetails = ({ name, gender, alive, awake, hunger, mood, image_url, user_id, area_id }) => {
  return (
    <div>
      <div>
        DUCK DETAILS
        <h3>{name} {gender === "female" ? "♀️" : "♂️"}</h3>
        <p>{mood}</p>
        <p>Hunger: {hunger}</p>
        <p>Owner: {user_id}</p>
        <p>Area: {area_id}</p>
        <img src={require(`../images/${image_url}`)} alt={name} width="20%"/>
      </div>
      <div>
        ACTION MENU
        <ActionsMenu />
      </div>
    </div>
  );
};

export default DuckDetails;
