// Calculate a 4 by 4 matrix (enter a 4 by 4 matrix row by row) and display sum of
// all elements.

import readline from "readline/promises"

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let matrix: number[][] = [[], [], [], []]
let sum = 0
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    matrix[i][j] = parseFloat(await prompt.question(`Enter element for rom ${i + 1} column ${j + 1}: `))
    sum += matrix[i][j]
  }
}
console.log(matrix)
console.log(`Sum of this matrix is: ${sum}`)

prompt.close()
