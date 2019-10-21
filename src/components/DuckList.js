import React from "react";
import Duck from "./Duck";

const DuckList = ({ ducks, handleDuckSelection }) => {
  return (
    <ul>
      {ducks.map(duck => {
        return <Duck key={duck.id} selectDuck={() => handleDuckSelection(duck)} {...duck} />;
      })}
    </ul>
  );
}; 

export default DuckList;
