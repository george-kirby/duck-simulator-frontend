const increaseToMax10 = (value, increment) => {
    let newValue = value + increment
    if (newValue > 10) {newValue = 10}
    return newValue
}

export default { increaseToMax10 }