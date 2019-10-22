import React from "react"
import "../stylesheets/ActionsMenu.css"

const ActionsMenu = ({
  alive,
  area,
  areas,
  awake,
  feedDuck,
  handleDuckChangeArea,
  hunger,
  killDuck,
  sleepChange,
  squeakDuck,
  takeDuckForSwim,
  belongsToCurrentUser
}) => {
  // const [areaId, setAreaId] = useState(area.id)

  // const handleDuckChangeArea = event => {
  //   setAreaId(event.target.value)
  // }
  const failsStandardCheck = () => {
    return !belongsToCurrentUser || !alive
  }

  const audio = new Audio(require("../audio/duck-quack.mp3"))

  const playSqueak = () => {
    audio.play()
  }

  const areaEmojis = {
    "Flatiron Pond": "🏡",
    "Green Park Pond": "🌳",
    "Hell Pond": "🔥"
  }

  return (
    <div className="actions-list">
      <div>
        <button
          onClick={feedDuck}
          disabled={failsStandardCheck() || !awake}
          className={hunger > 9 ? "red" : "normal"}
        >
          {"🍞"} Feed
        </button>
      </div>

      <div>
        <button onClick={sleepChange} disabled={failsStandardCheck()}>
          <span role="img">{awake ? "🛏️ Put to Bed" : "⏰ Wake Up"}</span>
        </button>
      </div>

      <div>
        <button
          onClick={takeDuckForSwim}
          disabled={failsStandardCheck() || !awake || hunger > 9}
        >
          {"👙"} Take for a swim
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            squeakDuck()
            playSqueak()
          }}
          disabled={failsStandardCheck() || !awake || hunger > 9}
        >
          {"🔈"} Squeak
        </button>
      </div>

      <div>
        <button onClick={killDuck} disabled={failsStandardCheck()}>
          {"☠️"} KILL
        </button>
      </div>

      <h3>MOVE AREA</h3>
      <div>
        <select
          disabled={!belongsToCurrentUser}
          value={area.id}
          onChange={handleDuckChangeArea}
        >
          {areas.map(area => (
            <option key={area.id} value={area.id}>
              {`${areaEmojis[area.name]} ${area.name}`}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default ActionsMenu
