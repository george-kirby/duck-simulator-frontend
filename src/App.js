import React, { useState, useEffect } from "react";
import "./App.css";
import DuckContainer from "./containers/DuckContainer";
import API from "./adapters/API";
import AreaContainer from "./containers/AreaContainer"

function App() {
  const [ducks, setDucks] = useState([]);
  const [areas, setAreas] = useState([]);
  // const [currentDuck, setCurrentDuck] = useState({
  //   id: 42,
  //   name: "Joaquin",
  //   gender: "male",
  //   alive: true,
  //   awake: true,
  //   hunger: 0,
  //   mood: "happy",
  //   image_url: "duck-template.jpg",
  //   user_id: 7,
  //   area_id: 5,
  //   created_at: "2019-10-17T12:15:50.160Z",
  //   updated_at: "2019-10-17T12:15:50.160Z"
  // });
  const [currentArea, setCurrentArea] = useState({
    "id": 7,
    "name": "Flatiron Pond",
    "max_capacity": 10,
    "image_url": "area-template.png",
    "ducks": [
      {
        "id": 32,
        "name": "Joaquin",
        "image_url": "duck-template.jpg"
      },
      {
        "id": 33,
        "name": "Oli",
        "image_url": "duck-template.jpg"
      },
      {
        "id": 37,
        "name": "Polly",
        "image_url": "duck-template.jpg"
      },
      {
        "id": 38,
        "name": "Angie",
        "image_url": "duck-template.jpg"
      },
      {
        "id": 39,
        "name": "Sohaib",
        "image_url": "duck-template.jpg"
      },
      {
        "id": 40,
        "name": "Ian",
        "image_url": "duck-template.jpg"
      },
      {
        "id": 41,
        "name": "Will",
        "image_url": ""
      }
    ]
  },);

  const [currentDuck, setCurrentDuck] = useState(null)
  // const [currentArea, setCurrentArea] = useState(null);

  useEffect(() => {
    API.getDucks().then(setDucks);
    API.getAreas().then(setAreas);
  }, []);

  const feedDuck = duck => {
    console.log(`${duck.name} ate some tasty bread`)
    API.patchDuck(duck, {mood: "happily fed", hunger: 0}).then(setCurrentDuck)
  }
  
  const takeDuckForSwim = duck => {
    console.log(`${duck.name} went for a swim`)
    API.patchDuck(duck, {mood: "swimming happily", hunger: duck.hunger + 5}).then(setCurrentDuck)
  }
  
  const squeakDuck = duck => {
    // duck emits happy/sad/angry noise depending on mood
  }
  
  const moveArea = (duck , area)=> {
    duck.area = area
  }

  const tuckInDuck = duck => {
    duck.awake = false
  }

  const killDuck = duck => {
    duck.alive = false
  }

  return (
    <div>
      <DuckContainer {...{ ducks, currentDuck, setCurrentDuck }} feedDuck={() => feedDuck(currentDuck)} takeDuckForSwim={() => takeDuckForSwim(currentDuck)} />
      <AreaContainer {...{ areas, currentArea }}   />
    </div>
  );
}

export default App;
