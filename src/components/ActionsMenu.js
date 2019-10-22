import React, { useState, useEffect } from "react"
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


  return (
    <div>
      <button
        onClick={feedDuck}
        disabled={!belongsToCurrentUser || !alive || !awake}
        className={hunger > 9 ? "red" : "normal"}
      >
        Feed
      </button>
      <button onClick={sleepChange} disabled={!belongsToCurrentUser || !alive}>
        {awake ? "Put to Bed" : "Wake Up"}
      </button>
      <button
        onClick={takeDuckForSwim}
        disabled={!belongsToCurrentUser || !alive || !awake || hunger > 9}
      >
        Take for a swim
      </button>
      <button onClick={squeakDuck} disabled={!belongsToCurrentUser || !alive || !awake || hunger > 9}>
        Squeak
      </button>
      <button onClick={killDuck} disabled={!belongsToCurrentUser || !alive}>
        KILL
      </button>
      <select disabled={!belongsToCurrentUser} value={area.id} onChange={handleDuckChangeArea}>
        {areas.map(area => (
          <option key={area.id} value={area.id}>
            {area.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ActionsMenu
