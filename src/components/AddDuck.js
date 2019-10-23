import React, { useState, useEffect } from "react"
import Helpers from "../helpers/Helpers"
import API from "../adapters/API"
import "../stylesheets/AddDuck.css"

const AddDuck = ({ currentUser, history }) => {
  const [name, setName] = useState("")
  const [gender, setGender] = useState("male")
  const [color, setColor] = useState("yellow")
  const [areas, setAreas] = useState([])
  const [area, setArea] = useState("15")

  useEffect(() => {
    API.getAreas().then(areas => {
      setAreas(areas)
      setArea(areas[0].id)
    })
  }, [])
  const handleNameChange = event => setName(event.target.value)
  const handleGenderChange = event => setGender(event.target.value)
  const handleColorChange = event => setColor(event.target.value)
  const handleAreaChange = event => setArea(event.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    let newDuck = {
      name,
      gender,
      color,
      area_id: area,
      user_id: currentUser.id
    }

    API.postDucks(newDuck) //.then(handleNewDuck)
    history.push("/")
  }

  return (
    <div className="add-duck-form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              placeholder="Name ... "
              onChange={handleNameChange}
              value={name}
            />
          </label>
        </div>
        <div>
          <label>
            Gender
            <select value={gender} onChange={handleGenderChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Duck Color
            <select value={color} onChange={handleColorChange}>
              <option value="yellow">Yellow</option>
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              <option value="pink">Pink</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Area
            <select value={area} onChange={handleAreaChange}>
              {areas.map(area => (
                <option key={area.id} value={area.id}>
                  {`${Helpers.areaEmojis[area.name]} ${area.name}`}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <input type="submit" value="Create Duck" />
        </div>
      </form>
      <div className="duck-images">
        <img
          src={require("../images/duck-drawings/football-duck.png")}
          alt="football-duck"
        />
        <img
          src={require("../images/duck-drawings/french-duck.png")}
          alt="french-duck"
        />
        <img
          src={require("../images/duck-drawings/party-duck.png")}
          alt="party-duck"
        />
        <img
          src={require("../images/duck-drawings/smart-duck.png")}
          alt="smart-duck"
        />
      </div>
    </div>
  )
}

export default AddDuck
