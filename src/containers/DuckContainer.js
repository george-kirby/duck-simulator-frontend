import React from "react";
import DuckList from "../components/DuckList";
import DuckDetails from "../components/DuckDetails";

const DuckContainer = ({ ducks, currentDuck }) => {
  return (
    <div>
      {currentDuck ? (
        <DuckDetails {...{ ...currentDuck }} />
      ) : (
        <DuckList {...{ ducks }} />
      )}
    </div>
  );
};

export default DuckContainer;
