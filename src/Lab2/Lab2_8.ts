// The user is required to input whole numbers. The program uses a loop
// to add up these numbers. Everything stops when the user enters ‘0’
// (zero).

import readline from "readline/promises"

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let sum: number = 0
let n: number

while (n != 0) {
  n = parseInt(await prompt.question("Enter whole number: "), 10)
  sum += n
}

console.log(`Sum is: ${sum}`)
prompt.close()
