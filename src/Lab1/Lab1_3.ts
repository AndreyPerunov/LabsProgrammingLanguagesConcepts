// Write a program that takes in the width, length and height of a room in
// metres and returns the volume of the room in cubic metres. Give the
// answer in cubic centimetres as well. Choose integer or real as you think
// fit

import readline from "readline/promises"

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const width: number = parseFloat(await prompt.question("Enter width in meters: "))
const length: number = parseFloat(await prompt.question("Enter length in meters: "))
const height: number = parseFloat(await prompt.question("Enter height in meters: "))

let volume: number = width * length * height

console.log("Volume of the room is", volume, "m^3 or", volume * 1_000_000, "cm^3")

prompt.close()
