import React from "react";
import ActionsMenu from "../components/ActionsMenu";

const DuckDetails = ({
  name,
  gender,
  alive,
  awake,
  hunger,
  mood,
  image_url,
  user,
  area,
  feedDuck,
  takeDuckForSwim,
  sleepChange, 
  squeakDuck, killDuck,
  removeCurrentDuck
}) => {

const moodDisplay = () => {
  if (!alive) return "Dead"
  if (!awake) return "Sleeping"
  return mood
}

const consciousnessDisplay = () => {
  if (!alive) return "Dead"
  if (!awake) return "Asleep"
  return "Awake"
}

  return (
    <div>
      <div>
        <div>
          DUCK DETAILS
          <button onClick={removeCurrentDuck}>Back to duck list</button>
        </div>

        <h3>
          {name} {gender === "female" ? "♀️" : "♂️"}
        </h3>
        <p>({alive ? "Alive" : "Dead"})</p>
        <p>(Consciousness: {consciousnessDisplay()})</p>
        <p>Mood: {moodDisplay()}</p>
        <p>Hunger: {hunger}</p>
        <p>Owner: {user.username}</p>
        <p>Area: {area.name}</p>
        <img src={require(`../images/${image_url}`)} alt={name} width="20%" />
      </div>
      <div>
        ACTION MENU
        <ActionsMenu {...{ alive, awake, hunger, feedDuck, takeDuckForSwim, sleepChange, squeakDuck, killDuck }} />
      </div>
    </div>
  );
};

export default DuckDetails;
