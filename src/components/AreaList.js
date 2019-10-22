import React from "react"
import Area from "./Area"
import "../stylesheets/AreaList.css"

const AreaList = ({ areas, setCurrentAreaId }) => {
  return (
    <div className="areas-list">
      <h3>Area List</h3>
      <div className="cards-container">
        {areas.map(area => {
          return (
            <Area
              key={area.id}
              selectArea={() => setCurrentAreaId(area.id)}
              {...area}
            />
          )
        })}
      </div>
    </div>
  )
}

export default AreaList
