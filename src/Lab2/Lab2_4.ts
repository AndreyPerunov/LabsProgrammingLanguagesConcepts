// The program asks the user to input two integer numbers; the two
// numbers are then divided. The output on the screen should show the
// integer part of the answer together with the remainder. An example of
// what is expected is given below. E.g. If 11 and 3 are the two numbers,
// the output should show: 11/3 = 3 remainder 2

import readline from "readline/promises"

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const input1: string = await prompt.question("Enter first integer: ")
const input2: string = await prompt.question("Enter second integer: ")

const n1: number = parseInt(input1)
const n2: number = parseInt(input2)

console.log(`${n1}/${n2} = ${Math.trunc(n1 / n2)} remainder ${n1 % n2}`)

prompt.close()
