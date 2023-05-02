// (Constants, fixed value, transformation ) Write a program which takes
// the radius of a circle as input and returns its area and circumference (pi
// = 3.14159).

import readline from "readline/promises"

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const pi: number = Math.PI

const input: string = await prompt.question("Enter radius: ")
const radius: number = parseFloat(input)

console.log(`Area: ${pi * radius ** 2}`)
console.log(`Circumference: ${2 * pi * radius}`)

prompt.close()
