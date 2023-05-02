// The user will input his/her age (integer type). The program will check if
// the user is able to apply for a driving license. If the user is of legal age
// (i.e. 18), the program will encourage the user to apply. Otherwise, the
// program will calculate the number of years remaining till the age of 18.

import readline from "readline/promises"

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const input: string = await prompt.question("Enter your age: ")
const age: number = parseInt(input)

if (age >= 18) {
  console.log("You can apply for a driving license.")
} else {
  console.log(`${18 - age} year remains until you can apply for a driving license.`)
}

prompt.close()
