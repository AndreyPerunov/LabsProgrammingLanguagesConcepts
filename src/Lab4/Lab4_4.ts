// Use recursive method to calculate the factorial of a number entered by the user
// (5! = 1 * 2 * 3 * 4 * 5 and will be equal to 120. Note: that 0! = 1. Factorial is
// defined only for positive integers numbers).

import readline from "readline/promises"

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function factorial(n: number) {
  if (n === 0 || n === 1) return 1
  return n * factorial(n - 1)
}

const input: string = await prompt.question("Enter number to get factorial: ")
console.log(factorial(parseInt(input, 10)))

prompt.close()
