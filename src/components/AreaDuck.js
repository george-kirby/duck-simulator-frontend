import React from "react";
import "../stylesheets/AreaDuck.css";

const AreaDuck = props => {
  return (
    <div className="area-duck flex-container">
      <div className="duck-container">Duck 1</div>
      <div className="duck-container">Duck 2</div>
      <div className="duck-container">Duck 3</div>
      <div className="duck-container">Duck 4</div>
    </div>
  );
};

export default AreaDuck;
