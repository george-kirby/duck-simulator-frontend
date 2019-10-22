import React from "react"
import Area from "./Area"

const AreaList = ({ areas, setCurrentAreaId }) => {
  return (
    <ul>
      {areas.map(area => {
        return (
          <Area
            key={area.id}
            selectArea={() => setCurrentAreaId(area.id)}
            {...area}
          />
        )
      })}
    </ul>
  )
}

export default AreaList
