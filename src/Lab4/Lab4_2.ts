// Write two functions of a number raised to the square. In the first function
// parameter transmits by value, in the second – by reference.

function sqrByValue(num: number): number {
  return num ** 2
}
function sqrByReference(numObject: { value: number }): void {
  numObject.value = numObject.value ** 2
}

let x: number = 9
console.log(`Passed by value: ${sqrByValue(x)}`)

let xObject: { value: number } = { value: x } // Primitive types (strings, numbers, booleans) are passed by value, others by reference

sqrByReference(xObject)
console.log(`Passed by reference: ${xObject.value}`)
