import React from "react";
import Duck from "./Duck";

const DuckList = ({ ducks, setCurrentDuck }) => {
  return (
    <ul>
      {ducks.map(duck => {
        return <Duck key={duck.id} selectDuck={() => setCurrentDuck(duck)} {...duck} />;
      })}
    </ul>
  );
};

export default DuckList;
