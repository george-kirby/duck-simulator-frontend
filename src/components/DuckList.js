import React from "react";
import Duck from "./Duck";

const DuckList = ({ ducks, handleDuckSelection, currentUser }) => {

  const listHeader = () => {
    return currentUser ? "Your ducks" : "All the ducks"
  }

  return (
    <ul> <strong>{listHeader()}</strong>
      {ducks.map(duck => {
        return <Duck key={duck.id} selectDuck={() => handleDuckSelection(duck)} {...duck} />;
      })}
    </ul>
  );
}; 

export default DuckList;
