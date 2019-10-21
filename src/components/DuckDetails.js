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
  image_url,
  user,
  area,
  feedDuck,
  takeDuckForSwim,
  sleepChange,
  squeakDuck,
  killDuck,
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

  const displayImage =
    hunger > 9
      ? Helpers.displayImage(
          "duck-drawings",
          Images.ducks.standardDuck,
          Images.ducks.hangryDuck
        )
      : Helpers.displayImage(
          "duck-drawings",
          Images.ducks.standardDuck,
          Images.ducks.standardDuck
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
        <p>({alive ? "Alive" : "Dead"})</p>
        <p>(Consciousness: {consciousnessDisplay()})</p>
        <p>Mood: {moodDisplay()}</p>
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
