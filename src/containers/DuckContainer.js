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
  handleDuckSelection,
  currentUser
}) => {
  const filteredDucks = () => {
    return ducks.filter(
      duck => !currentUser || duck.user.username === currentUser.username
    )
  }

  return (
    <div>
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
            killDuck,
            currentUser
          }}
          removeCurrentDuck={() => handleDuckSelection(null)}
        />
      ) : (
        <DuckList
          {...{ ducks: filteredDucks(), handleDuckSelection, currentUser }}
        />
      )}
    </div>
  )
}

export default DuckContainer
