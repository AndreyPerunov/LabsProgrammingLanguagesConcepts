// Write a program to turn Km/hr into mph. Use 1km = 0.62137 mile.

import readline from "readline/promises"

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const input: string = await prompt.question("Enter speed in Km/hr: ")
const speed: number = parseFloat(input)

console.log(`${speed}km/hr = ${speed * 0.62137}mph`)

prompt.close()
