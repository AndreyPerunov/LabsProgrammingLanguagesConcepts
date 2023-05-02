// Write procedure Maximum for three real numbers that accepts from the
// keyboard.

import readline from "readline/promises"

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function Maximum(): Promise<number> {
  const a: number = parseFloat(await prompt.question("Enter the first number: "))
  const b: number = parseFloat(await prompt.question("Enter the second number: "))
  const c: number = parseFloat(await prompt.question("Enter the third number: "))

  return Math.max(a, b, c)
}

console.log(`Maximum: ${await Maximum()}`)

prompt.close()
