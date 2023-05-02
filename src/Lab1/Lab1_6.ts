// (div, mod) Express a given number of seconds in terms of hours, minutes and seconds

import readline from "readline/promises"

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const input: string = await prompt.question("Enter seconds: ")
const seconds: number = parseInt(input, 10)

const hours = Math.floor(seconds / 3600)
const minutes = Math.floor((seconds % 3600) / 60)
const remainingSeconds: number = Math.floor((seconds % 3600) % 60)

console.log(`${seconds} seconds is ${hours} hours, ${minutes} minutes, and ${remainingSeconds} seconds.`)

prompt.close()
