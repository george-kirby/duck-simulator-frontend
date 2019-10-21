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
  handleDuckSelection
}) => {
  return (
    <div>
      {currentDuck ? (
        <DuckDetails
          {...{ ...currentDuck, feedDuck, takeDuckForSwim, sleepChange, squeakDuck, killDuck }}
          removeCurrentDuck={() => handleDuckSelection(null)}
        />
      ) : (
        <DuckList {...{ ducks, handleDuckSelection }} />
      )}
    </div>
  );
};

export default DuckContainer;
