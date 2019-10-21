import React from "react"
import ActionsMenu from "../components/ActionsMenu"
import Helpers from "../helpers/Helpers"
import "../stylesheets/DuckDetails.css"
import Images from "../helpers/ImagePaths"

const DuckDetails = ({
  name,
  gender,
  alive,
  awake,
  hunger,
  mood,
  user,
  area,
  feedDuck,
  takeDuckForSwim,
  sleepChange,
  squeakDuck,
  killDuck,
  removeCurrentDuck
}) => {
  const displayImage = Helpers.displayImage(
    "duck-drawings",
    Images.ducks.standard,
    Images.ducks[mood]
  )

  return (
    <div id="duck-details">
      <div>
        <div>
          DUCK DETAILS
          <button onClick={removeCurrentDuck}>Back to duck list</button>
        </div>

        <h3>
          {name} {gender === "female" ? "♀️" : "♂️"}
        </h3>
        <p>Mood: {mood}</p>
        <p className={hunger > 9 ? "red" : "normal"}>Hunger: {hunger}</p>
        <p>Owner: {user.username}</p>
        <p>Area: {area.name}</p>
        <img src={displayImage} alt={name} width="50%" />
      </div>
      <div>
        ACTION MENU
        <ActionsMenu
          {...{
            alive,
            awake,
            hunger,
            feedDuck,
            takeDuckForSwim,
            sleepChange,
            squeakDuck,
            killDuck
          }}
        />
      </div>
    </div>
  )
}

export default DuckDetails
