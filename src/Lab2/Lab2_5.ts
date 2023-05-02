// The program asks the user to type in 3 numbers of real type. The
// program calculates the average for the numbers and displays the result
// to 2 decimal places.

import readline from "readline/promises"

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const input1: string = await prompt.question("Enter first number: ")
const input2: string = await prompt.question("Enter second number: ")
const input3: string = await prompt.question("Enter third number: ")

const n1: number = parseFloat(input1)
const n2: number = parseFloat(input2)
const n3: number = parseFloat(input3)

const avg: number = (n1 + n2 + n3) / 3

console.log(`Average of [${n1}, ${n2}, ${n3}] is ${avg.toFixed(2)}`)

prompt.close()
