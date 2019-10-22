import React from "react"
import DuckList from "../components/DuckList"
import DuckDetails from "../components/DuckDetails"

const DuckContainer = ({
  areas,
  ducks,
  currentDuck,
  feedDuck,
  takeDuckForSwim,
  handleDuckChangeArea,
  sleepChange,
  squeakDuck,
  killDuck,
  handleDuckSelection
}) => {
  const background = require("../images/theme/wood-background.jpg")

  const divStyle = {
    backgroundImage: `url(${background})`,
    height: "600px"
  }

  return (
    <div style={divStyle}>
      {currentDuck ? (
        <DuckDetails
          {...{
            areas,
            ...currentDuck,
            feedDuck,
            handleDuckChangeArea,
            takeDuckForSwim,
            sleepChange,
            squeakDuck,
            killDuck
          }}
          removeCurrentDuck={() => handleDuckSelection(null)}
        />
      ) : (
        <DuckList {...{ ducks, handleDuckSelection }} />
      )}
    </div>
  )
}

export default DuckContainer
