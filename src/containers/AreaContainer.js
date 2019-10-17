import React from "react";
import AreaList from "../components/AreaList";
import AreaDetails from "../components/AreaDetails";

const AreaContainer = ({ areas, currentArea }) => {
  return (
    <div>
      {currentArea ? (
        <AreaDetails {...{ ...currentArea }} />
      ) : (
        <AreaList {...{ areas }} />
      )}
    </div>
  );
};

export default AreaContainer;
