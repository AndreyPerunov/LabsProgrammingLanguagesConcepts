// Write a program that generates an array containing 40 random integer numbers
// from a given range(when displaying array elements on the screen, place the
// values in 5 columns).Set the range of values and the number of elements of the
// array as character constants. Range of values: 0 .. 9.

const arrayLength: number = 40
const array: number[] = []

const a: number = 0
const b: number = 9

for (let i = 0; i < arrayLength; i++) array.push(Math.random() * (b - a) + a)

for (let i = 1; i < arrayLength + 1; i++) {
  i % 5 === 0 ? process.stdout.write(array[i - 1] + "\n") : process.stdout.write(`${array[i - 1]} | `)
}
