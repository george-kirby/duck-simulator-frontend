import React, { useState, useEffect } from "react"
import API from "../adapters/API"

const AddDuck = () => {
  const [name, setName] = useState("")
  const [gender, setGender] = useState("male")
  const [color, setColor] = useState("yellow")
  const [areas, setAreas] = useState([])
  const [area, setArea] = useState("1")

  useEffect(() => {
    API.getAreas().then(setAreas)
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
      user_id: 1
    }

    API.postDucks(newDuck).then(console.log)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Name ... "
            onChange={handleNameChange}
            value={name}
          />
        </label>
        <label>
          Gender
          <select value={gender} onChange={handleGenderChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>
          Duck Color
          <select value={color} onChange={handleColorChange}>
            <option value="yellow">Yellow</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="pink">Pink</option>
          </select>
        </label>
        <label>
          Area
          <select value={area} onChange={handleAreaChange}>
            {areas.map(area => (
              <option value={area.id}>{area.name}</option>
            ))}
          </select>
        </label>
        <input type="submit" value="Create Duck" />
      </form>
    </div>
  )
}

export default AddDuck
