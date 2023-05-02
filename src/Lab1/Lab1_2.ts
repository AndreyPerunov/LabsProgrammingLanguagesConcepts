// (Type real, format descriptor) Write a program which accepts three real
// numbers, computes their sum and outputs the result. Amend the program
// so that the result is output to 2 dp.

import readline from "readline/promises"

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const num1: number = parseFloat(await prompt.question("Enter first number: "))
const num2: number = parseFloat(await prompt.question("Enter second number: "))
const num3: number = parseFloat(await prompt.question("Enter third number: "))

let sum: number = num1 + num2 + num3

console.log("Sum:", sum.toFixed(2))

prompt.close()
