// Write a program to read and store n elements of an array. Display n elements of
// the array in reverse order. Find the average of n numbers and display it on the
// screen.

import readline from "readline/promises"

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const a: number[] = []
const n: number = parseInt(await prompt.question("Enter length of an array: "))
for (let i = 0; i < n; i++) {
  let el: number = parseFloat(await prompt.question("Enter number: "))
  a.push(el)
}

console.log(`Reverse: ${a.reverse()}`)
let sum: number = 0
a.forEach(el => {
  sum += el
})
console.log(`Average: ${sum / a.length}`)

prompt.close()
