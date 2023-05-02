// Ask the user his age in years and then tell him how old he is going to be on his next birthday.

import readline from "readline/promises"

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const input: string = await prompt.question("How old are you: ")
let age: number = parseFloat(input)

console.log(`You will be ${++age} years old on your next birthday.`)

prompt.close()
