import React from "react"
import AreaList from "../components/AreaList"
import AreaDetails from "../components/AreaDetails"

const AreaContainer = ({
  areas,
  currentArea,
  setCurrentAreaId,
  handleClickAreaDuck
}) => {
  return (
    <div>
      {currentArea ? (
        <AreaDetails
          removeCurrentArea={() => setCurrentAreaId(null)}
          {...{ ...currentArea, handleClickAreaDuck }}
        />
      ) : (
        <AreaList {...{ areas, setCurrentAreaId }} />
      )}
    </div>
  )
}

export default AreaContainer
