import React, { useState, useEffect } from "react"
import "./stylesheets/App.css"
import DuckContainer from "./containers/DuckContainer"
import API from "./adapters/API"
import AreaContainer from "./containers/AreaContainer"
import Helpers from "./helpers/Helpers"

function App() {
  const [ducks, setDucks] = useState([])
  const [areas, setAreas] = useState([])
  // const [currentDuck, setCurrentDuck] = useState({
  //   id: 43,
  //   name: "Oli",
  //   gender: "male",
  //   alive: true,
  //   awake: true,
  //   hunger: 0,
  //   mood: "happily fed",
  //   image_url: "duck-template.jpg",
  //   area: {
  //     name: "Flatiron Pond"
  //   },
  //   user: {
  //     username: "geok"
  //   }
  // });

  let updatedDuck = null

  // const [currentArea, setCurrentArea] = useState({
  //   id: 7,
  //   name: "Flatiron Pond",
  //   max_capacity: 10,
  //   image_url: "area-template.png",
  //   ducks: [
  //     {
  //       id: 32,
  //       name: "Joaquin",
  //       image_url: "duck-template.jpg"
  //     },
  //     {
  //       id: 33,
  //       name: "Oli",
  //       image_url: "duck-template.jpg"
  //     },
  //     {
  //       id: 37,
  //       name: "Polly",
  //       image_url: "duck-template.jpg"
  //     },
  //     {
  //       id: 38,
  //       name: "Angie",
  //       image_url: "duck-template.jpg"
  //     },
  //     {
  //       id: 39,
  //       name: "Sohaib",
  //       image_url: "duck-template.jpg"
  //     },
  //     {
  //       id: 40,
  //       name: "Ian",
  //       image_url: "duck-template.jpg"
  //     },
  //     {
  //       id: 41,
  //       name: "Will",
  //       image_url: ""
  //     }
  //   ]
  // });

  const [currentDuck, setCurrentDuck] = useState(null)
  const [currentArea, setCurrentArea] = useState(null)
  // const [updateNeeded, setUpdateNeeded] = useState(null);

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
    API.patchDuck(duck, { mood: "happily fed", hunger: 0 }).then(setCurrentDuck)
  }

  const takeDuckForSwim = duck => {
    console.log(`${duck.name} went for a swim`)
    let newHunger = Helpers.increaseToMax10(duck.hunger, 5)
    API.patchDuck(duck, {
      mood: "swimming happily",
      hunger: newHunger
    }).then(setCurrentDuck)
  }

  const squeakDuck = duck => {
    // duck emits happy/sad/angry noise depending on mood
    if (duck.alive) {
      console.log(`${duck.mood} noises...`)
    } else {
      console.log(`silence... :(`)
    }
    let newHunger = Helpers.increaseToMax10(duck.hunger, 2)
    API.patchDuck(duck, {hunger: newHunger}).then(setCurrentDuck)
  }

  const moveArea = (duck, area) => {
    duck.area = area
  }

  const sleepChange = duck => {
    API.patchDuck(duck, { awake: !duck.awake }).then(setCurrentDuck)
  }

  const killDuck = duck => {
    console.log(`${duck.name} died! :(`)
    API.patchDuck(duck, { alive: false }).then(setCurrentDuck)
  }

  return (
    <div>
      <div className="split left">
        <DuckContainer
          {...{ ducks, currentDuck, setCurrentDuck }}
          feedDuck={() => feedDuck(currentDuck)}
          takeDuckForSwim={() => takeDuckForSwim(currentDuck)}
          sleepChange={() => sleepChange(currentDuck)}
          squeakDuck={() => squeakDuck(currentDuck)}
          killDuck={() => killDuck(currentDuck)}
        />
      </div>
      <div className="split right">
        <AreaContainer {...{ areas, currentArea }} />
      </div>
    </div>
  )
}

export default App
