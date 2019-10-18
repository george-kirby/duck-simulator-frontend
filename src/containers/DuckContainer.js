import React from "react";
import DuckList from "../components/DuckList";
import DuckDetails from "../components/DuckDetails";

const DuckContainer = ({
  ducks,
  currentDuck,
  feedDuck,
  takeDuckForSwim,
  sleepChange,
  squeakDuck, killDuck, 
  setCurrentDuck
}) => {
  return (
    <div>
      {currentDuck ? (
        <DuckDetails
          {...{ ...currentDuck, feedDuck, takeDuckForSwim, sleepChange, squeakDuck, killDuck }}
          removeCurrentDuck={() => setCurrentDuck(null)}
        />
      ) : (
        <DuckList {...{ ducks, setCurrentDuck }} />
      )}
    </div>
  );
};

export default DuckContainer;
