import React from "react"
import "../stylesheets/AreaDuckList.css"
import AreaDuck from "../components/AreaDuck"

const AreaDuckList = ({ ducks, handleClickAreaDuck, currentDuck }) => {
  const maxDucks = ducks.slice(0, 8)

  return (
    <div className="area-duck flex-container">
      {maxDucks.map(duck => (
        <AreaDuck
          key={duck.id}
          {...{ ...duck, handleClickAreaDuck, currentDuck }}
        />
      ))}
    </div>
  )
}

export default AreaDuckList
