import React from "react";
import Area from "./Area";

const AreaList = ({ areas }) => {
  return (
    <ul>
      {areas.map(area => {
        return <Area {...area} />;
      })}
    </ul>
  );
};

export default AreaList;