import React, { useState, useEffect } from "react"
import "../stylesheets/Main.css"
import DuckContainer from "../containers/DuckContainer"
import AreaContainer from "../containers/AreaContainer"
import API from "../adapters/API"
import Helpers from "../helpers/Helpers"

const Main = ({ currentUser }) => {
  const [ducks, setDucks] = useState([])
  const [areas, setAreas] = useState([])
  const [currentDuck, setCurrentDuck] = useState(null)
  const [currentAreaId, setCurrentAreaId] = useState(null)

  useEffect(() => {
    API.getDucks().then(ducks => {
      API.getAreas().then(areas => {
        setDucks(ducks)
        setAreas(areas)
      })
    })
  }, [currentDuck])

  const feedDuck = duck => {
    console.log(`${duck.name} ate some tasty bread`)
    API.patchDuck(duck, { mood: "happy", hunger: 0 }).then(setCurrentDuck)
  }

  const takeDuckForSwim = duck => {
    console.log(`${duck.name} went for a swim`)
    let newHunger = Helpers.increaseToMax10(duck.hunger, 5)
    let mood = newHunger > 9 ? "hangry" : "happy"
    API.patchDuck(duck, { mood, hunger: newHunger }).then(setCurrentDuck)
  }

  const squeakDuck = duck => {
    // let audio = require("../audio/duck-quack.mp3")
    // audio.play()
    // duck emits happy/sad/angry noise depending on mood
    if (duck.alive) {
      console.log(`${duck.mood} noises...`)
    } else {
      console.log(`silence... :(`)
    }
    let newHunger = Helpers.increaseToMax10(duck.hunger, 2)
    let mood = newHunger > 9 ? "hangry" : "happy"
    API.patchDuck(duck, { hunger: newHunger, mood }).then(setCurrentDuck)
  }

  const sleepChange = duck => {
    let duckData = {}
    if (duck.awake) {
      duckData = { awake: false, mood: "sleeping" }
    } else {
      if (duck.hunger > 9) {
        duckData = { awake: true, mood: "hangry" }
      } else {
        duckData = { awake: true, mood: "happy" }
      }
    }
    API.patchDuck(duck, duckData).then(setCurrentDuck)
  }

  const killDuck = duck => {
    if (window.confirm(`Are you sure you want to kill ${duck.name}??`)) {
      console.log(`${duck.name} died! :(`)
      API.patchDuck(duck, { alive: false, mood: "dead" }).then(setCurrentDuck)
    }
  }

  const handleDuckChangeArea = event => {
    let areaId = parseInt(event.target.value, 10)
    API.patchDuck(currentDuck, { area_id: areaId }).then(setCurrentDuck)
    setCurrentAreaId(areaId)
  }

  const handleDuckSelection = duck => {
    setCurrentDuck(duck)
    if (duck === null) {
      setCurrentAreaId(null)
    } else {
      // let selectedArea = areas.find(area => area.id === duck.area.id)
      setCurrentAreaId(duck.area.id)
    }
  }

  const handleClickAreaDuck = duckId => {
    let duckSelected = ducks.find(duck => duck.id === duckId)
    setCurrentDuck(duckSelected)
  }

  const findCurrentArea = () => {
    return areas.find(area => area.id === currentAreaId)
  }

  return (
    <div>
      <div className="split left">
        <DuckContainer
          {...{
            ducks,
            currentDuck,
            handleDuckSelection,
            handleDuckChangeArea,
            areas,
            currentUser
          }}
          feedDuck={() => feedDuck(currentDuck)}
          takeDuckForSwim={() => takeDuckForSwim(currentDuck)}
          sleepChange={() => sleepChange(currentDuck)}
          squeakDuck={() => squeakDuck(currentDuck)}
          killDuck={() => killDuck(currentDuck)}
        />
      </div>
      <div className="split right">
        <AreaContainer
          currentArea={findCurrentArea()}
          {...{ areas, setCurrentAreaId, handleClickAreaDuck, currentDuck }}
        />
      </div>
    </div>
  )
}

export default Main
