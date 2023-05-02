// (If..then, transformation) Write a program which accepts a temperature
// value and then offers the user a choice between converting from C to F
// or from F to C.

import readline from "readline/promises"

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const input1: string = await prompt.question("Enter first number: ")
const input2: string = await prompt.question("Would you like to conver this value...\n[1] ...from C to F\n[2]...from F to C\n")

const value: number = parseFloat(input1)
const choice: number = parseInt(input2)

if (choice === 1) {
  // (1°C × 9/5) + 32 = 33.8°F
  console.log(`${value}°C = ${value * (9 / 5) + 32}°F`)
} else if (choice === 2) {
  // (1°F − 32) × 5/9 = -17.22°C
  console.log(`${value}°F = ${(value - 32) * (5 / 9)}°C`)
} else {
  console.log("Incorrect input")
}

prompt.close()
