const increaseToMax10 = (value, increment) => {
  let newValue = value + increment
  if (newValue > 10) {
    newValue = 10
  }
  return newValue
}

const displayImage = (folder, defaultImage, image) => {
  return image === ""
    ? require(`../images/${folder}/${defaultImage}`)
    : require(`../images/${folder}/${image}`)
}

const areaEmojis = {
  "Flatiron Pond": "🏡",
  "Green Park Pond": "🌳",
  "Hell Pond": "🔥"
}

export default { increaseToMax10, displayImage, areaEmojis }
