// Program will calculate the area and perimeter of a rectangle when the
// user types the length and breadth. The results will be appropriately
// displayed on the screen.

import readline from "readline/promises"

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const input1: string = await prompt.question("Enter length of a rectangle: ")
const input2: string = await prompt.question("Enter breadth of a rectangle: ")

const n1: number = parseFloat(input1)
const n2: number = parseFloat(input2)

console.log(`S = ${n1 * n2}`)
console.log(`P = ${(n1 + n2) * 2}`)

prompt.close()
