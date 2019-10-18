import React from "react"
import "../stylesheets/AreaDuckList.css"
import AreaDuck from "../components/AreaDuck"

const AreaDuckList = ({ ducks }) => {
  const maxDucks = ducks.slice(0, 4)

  return (
    <div className="area-duck flex-container">
      {maxDucks.map(duck => (
        <AreaDuck key={duck.id} {...{ ...duck }} />
      ))}
    </div>
  )
}

export default AreaDuckList
