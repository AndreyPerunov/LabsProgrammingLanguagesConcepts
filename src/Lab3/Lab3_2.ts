// Write a program that reads a first name and a second name from the user and
// joins them together in a single string (concatenation).

import readline from "readline/promises"

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const name: string = await prompt.question("Enter first name: ")
const surname: string = await prompt.question("Enter second name: ")

const person: string = name.concat(" ", surname)
console.log(person)

prompt.close()
