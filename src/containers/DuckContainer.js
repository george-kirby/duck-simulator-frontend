import React from "react";
import DuckList from "../components/DuckList";
import DuckDetails from "../components/DuckDetails";

const DuckContainer = ({ ducks, currentDuck, feedDuck, takeDuckForSwim, setCurrentDuck }) => {
  return (
    <div>
      {currentDuck ? (
        <DuckDetails {...{ ...currentDuck, feedDuck, takeDuckForSwim} } removeCurrentDuck={() => setCurrentDuck(null)} />
      ) : (
        <DuckList {...{ ducks, setCurrentDuck }} />
      )}
    </div>
  );
};

export default DuckContainer;
