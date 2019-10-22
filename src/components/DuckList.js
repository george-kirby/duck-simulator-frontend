import React from "react"
import Duck from "./Duck"
import "../stylesheets/DuckList.css"

const DuckList = ({ ducks, handleDuckSelection, currentUser }) => {
  const listHeader = () => {
    return currentUser ? "Your ducks" : "All the ducks"
  }

  return (
    <div className="duck-list">
      <h3>{listHeader()}</h3>
      <div className="cards-container">
        {ducks.map(duck => {
          return (
            <Duck
              key={duck.id}
              selectDuck={() => handleDuckSelection(duck)}
              {...duck}
            />
          )
        })}
      </div>
    </div>
  )
}

export default DuckList
