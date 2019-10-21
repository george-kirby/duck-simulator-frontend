const increaseToMax10 = (value, increment) => {
    let newValue = value + increment
    if (newValue > 10) {newValue = 10}
    return newValue
}

const displayImage = (defaultImage, image) => {
    return image === ""
      ? require(`../images/${defaultImage}`)
      : require(`../images/${image}`)
  }

export default { increaseToMax10, displayImage }