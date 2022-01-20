const findWaldo = function (names) {
  let index;
  names.forEach((name, i) => {
    if (name === 'Waldo') {
      index = i;
    }
  })
  return index;
}

console.log(findWaldo(["Alice", "Bob", "Waldo", "Winston"], function (index) {
  index = findWaldo(names)
  console.log(`Found him at index: ${index}`)
}));