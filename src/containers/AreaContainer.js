import React from "react"
import AreaList from "../components/AreaList"
import AreaDetails from "../components/AreaDetails"

const AreaContainer = ({
  areas,
  currentArea,
  setCurrentArea,
  handleClickAreaDuck
}) => {
  return (
    <div>
      {currentArea ? (
        <AreaDetails
          removeCurrentArea={() => setCurrentArea(null)}
          {...{ ...currentArea, handleClickAreaDuck }}
        />
      ) : (
        <AreaList {...{ areas, setCurrentArea }} />
      )}
    </div>
  )
}

export default AreaContainer
