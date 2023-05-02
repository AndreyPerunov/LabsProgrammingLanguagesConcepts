//Write a program to express a number of days in weeks and days.

import readline from "readline/promises"

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const input: string = await prompt.question("Enter number of days: ")
const days: number = parseInt(input, 10)

const weeks: number = Math.floor(days / 7)
const remainingDays: number = days % 7

console.log(`${days} days is ${weeks} weeks and ${remainingDays} days.`)

prompt.close()
