// Write a program which accepts two real numbers, asks whether the
// user requires a rounded or truncated result and then outputs their
// product in the form requested.

import readline from "readline/promises"

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const input1: string = await prompt.question("Enter first number: ")
const input2: string = await prompt.question("Enter second number: ")
const input3: string = await prompt.question("Would you like result to be rounded or truncated? (r/t) ")

const n1: number = parseFloat(input1)
const n2: number = parseFloat(input2)

switch (input3) {
  case "r":
  case "R":
  case "rounded":
  case "Rounded":
    console.log(`${n1} * ${n2} = ${Math.round(n1 * n2)}`)
    break
  case "t":
  case "T":
  case "truncated":
  case "Truncated":
    console.log(`${n1} * ${n2} = ${Math.trunc(n1 * n2)}`)
    break
  default:
    console.log("Incorrect input!")
    break
}

prompt.close()
