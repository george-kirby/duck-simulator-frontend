import React, { useState, useEffect } from "react";
import "./stylesheets/App.css";
import DuckContainer from "./containers/DuckContainer";
import API from "./adapters/API";
import AreaContainer from "./containers/AreaContainer";

function App() {
  const [ducks, setDucks] = useState([]);
  const [areas, setAreas] = useState([]);
  const [currentDuck, setCurrentDuck] = useState(null);
  const [currentArea, setCurrentArea] = useState(null);

  useEffect(() => {
    API.getDucks().then(setDucks);
    API.getAreas().then(setAreas);
  }, []);

  const feedDuck = duck => {
    console.log(`${duck.name} ate some tasty bread`);
    API.patchDuck(duck, { mood: "happily fed", hunger: 0 }).then(
      setCurrentDuck
    );
  };

  const takeDuckForSwim = duck => {
    console.log(`${duck.name} went for a swim`);
    API.patchDuck(duck, {
      mood: "swimming happily",
      hunger: duck.hunger + 5
    }).then(setCurrentDuck);
  };

  const squeakDuck = duck => {
    // duck emits happy/sad/angry noise depending on mood
  };

  const moveArea = (duck, area) => {
    duck.area = area;
  };

  const tuckInDuck = duck => {
    duck.awake = false;
  };

  const killDuck = duck => {
    duck.alive = false;
  };

  return (
    <div>
      <div className="split left">
        <DuckContainer
          {...{ ducks, currentDuck, setCurrentDuck }}
          feedDuck={() => feedDuck(currentDuck)}
          takeDuckForSwim={() => takeDuckForSwim(currentDuck)}
        />
      </div>
      <div className="split right">
        <AreaContainer {...{ areas, currentArea, setCurrentArea }} />
      </div>
    </div>
  );
}

export default App;
