import React from "react";
import Duck from "./Duck";

const DuckList = ({ ducks }) => {
  return (
    <ul>
      {ducks.map(duck => {
        return <Duck {...duck} />;
      })}
    </ul>
  );
};

export default DuckList;
