import React from "react";
import Area from "./Area";

const AreaList = ({ areas, setCurrentArea }) => {
  return (
    <ul>
      {areas.map(area => {
        return (
          <Area
            key={area.id}
            selectArea={() => setCurrentArea(area)}
            {...area}
          />
        );
      })}
    </ul>
  );
};

export default AreaList;
