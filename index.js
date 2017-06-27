function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  greetings = ["hello" , "goodbye" , "see ya"]
  greetings.forEach(callback)
  return greetings;
}

function doToArray(array, callback) {
  array.forEach(callback)
}
