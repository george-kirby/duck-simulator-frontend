import React from "react";
import ActionsMenu from "../components/ActionsMenu";

const DuckDetails = ({ name, gender, alive, awake, hunger, mood, image_url, user, area, feedDuck, takeDuckForSwim, removeCurrentDuck }) => {
  return (
    <div>
      <div>
        <div>DUCK DETAILS <button onClick={removeCurrentDuck}>Back to duck list</button></div>
        
        <h3>{name} {gender === "female" ? "♀️" : "♂️"}</h3>
        <p>{mood}</p>
        <p>Hunger: {hunger}</p>
        {/* <p>Owner: {user.username}</p> */}
        {/* <p>Area: {area.name}</p> */}
        <img src={require(`../images/${image_url}`)} alt={name} width="20%"/>
      </div>
      <div>
        ACTION MENU
        <ActionsMenu {...{feedDuck, takeDuckForSwim}} />
      </div>
    </div>
  );
};

export default DuckDetails;
