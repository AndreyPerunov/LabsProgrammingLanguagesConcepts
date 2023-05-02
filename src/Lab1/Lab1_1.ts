// (Type integer, arithmetic operators, integer operators) Write a program
// which reads two integers and then displays a) their product and b) their
// quotient when the first is dividend (DIV) by the second.

import readline from "readline/promises"

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const num1: number = parseInt(await prompt.question("Enter first number: "), 10)
const num2: number = parseInt(await prompt.question("Enter second number: "), 10)

const product: number = num1 * num2
const quotient: number = num1 / num2

console.log(`The product of ${num1} and ${num2} is: ${product}`)
console.log(`The quotient of ${num1} divided by ${num2} is: ${quotient}`)

prompt.close()
