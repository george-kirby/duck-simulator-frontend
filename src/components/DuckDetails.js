import React from "react"
import ActionsMenu from "../components/ActionsMenu"
import Helpers from "../helpers/Helpers"
import "../stylesheets/DuckDetails.css"
import Images from "../helpers/ImagePaths"

const DuckDetails = ({
  name,
  gender,
  alive,
  areas,
  awake,
  hunger,
  mood,
  color,
  user,
  area,
  feedDuck,
  handleDuckChangeArea,
  takeDuckForSwim,
  sleepChange,
  squeakDuck,
  killDuck,
  removeCurrentDuck,
  currentUser
}) => {
  const displayImage = Helpers.displayImage(
    "duck-drawings",
    Images.ducks.standard,
    `${color}-${Images.ducks[mood]}`
  )

  const belongsToCurrentUser = () => {
    return currentUser ? currentUser.username === user.username : false
  }

  return (
    <div id="duck-details">
      <div>
        <div className="duck-details-header">
          <h3>DUCK DETAILS</h3>
          <button onClick={removeCurrentDuck}>Back</button>
        </div>

        <strong className="duck-name-styling">
          {name} {gender === "female" ? "♀️" : "♂️"}
        </strong>
        <p>Mood: {mood}</p>
        <p className={hunger > 9 ? "red" : "normal"}>Hunger: {hunger}</p>
        <p>Owner: {user.username}</p>
        <p>Area: {area.name}</p>
        <img src={displayImage} alt={name} width="50%" />
      </div>
      <div>
        <h3>ACTION MENU</h3>
        <ActionsMenu
          belongsToCurrentUser={belongsToCurrentUser()}
          {...{
            alive,
            awake,
            area,
            areas,
            handleDuckChangeArea,
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
