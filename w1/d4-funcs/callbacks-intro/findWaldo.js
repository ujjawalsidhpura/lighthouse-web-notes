const findWaldo = function (names, found) {
  let index;
  names.forEach((name, i) => {
    if (name === 'Waldo') {
      index = i;
    }
  })
  return index;
}

const actionWhenFound = function (names) {
  let index = findWaldo(names);
  console.log(`Found him at index: ${index}`)
}

console.log(findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound));