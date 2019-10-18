import React from "react";
import AreaList from "../components/AreaList";
import AreaDetails from "../components/AreaDetails";

const AreaContainer = ({ areas, currentArea, setCurrentArea }) => {
  return (
    <div>
      {currentArea ? (
        <AreaDetails
          removeCurrentArea={() => setCurrentArea(null)}
          {...{ ...currentArea }}
        />
      ) : (
        <AreaList {...{ areas, setCurrentArea }} />
      )}
    </div>
  );
};

export default AreaContainer;
