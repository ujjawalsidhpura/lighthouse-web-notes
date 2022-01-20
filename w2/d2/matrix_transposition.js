const transpose = function (matrix) {

  const outputMatrix = [];

  for (let i = 0; i < matrix[0].length; i++) {
    outputMatrix.push([]);
    for (let j = 0; j < matrix.length; j++) {
      outputMatrix[i].push(matrix[j][i])
    }
  }

  return outputMatrix;
}
// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n')
  }
}

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----')

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----')

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));

