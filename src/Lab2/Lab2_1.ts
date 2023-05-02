// Write a program which finds the roots of a quadratic equation from the
// three coefficients (a, b, c) using the formula roots= (-b +- sqrt(b ^2 -
// 4ac)) / 2a. (a is the coefficient for x^2
// b for x and c for the numeric part.)

import readline from "readline/promises"

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

type QuadraticCoefficients = {
  a: number
  b: number
  c: number
}

function extractCoefficients(equation: string): QuadraticCoefficients | null {
  const pattern = /y ?= ?([+-]? ?\d*) ?\*? ?x\^2 ?([+-]? ?\d*) ?\*? ?x ?([+-] ?\d+)/
  const match = equation.replace(/ /g, "").replace(/\*/g, "").match(pattern)

  if (match) {
    let a: number
    if (match[1] === "" || match[1] === "+") {
      a = 1
    } else if (match[1] === "-") {
      a = -1
    } else {
      a = parseFloat(match[1])
    }

    let b: number
    if (match[2] === "" || match[2] === "+") {
      b = 1
    } else if (match[2] === "-") {
      b = -1
    } else {
      b = parseFloat(match[2])
    }

    let c: number = parseFloat(match[3])

    return { a, b, c }
  }

  return null
}

const input: string = await prompt.question("Enter quadratic equation(y=ax^2+bx+c): ")
const coefficients: QuadraticCoefficients = extractCoefficients(input)

if (coefficients) {
  const discriminant: number = coefficients.b ** 2 - 4 * coefficients.a * coefficients.c
  const x_1: number = ((-coefficients.b + Math.sqrt(coefficients.b ** 2 - 4 * coefficients.a * coefficients.c)) / 2) * coefficients.a
  const x_2: number = ((-coefficients.b - Math.sqrt(coefficients.b ** 2 - 4 * coefficients.a * coefficients.c)) / 2) * coefficients.a
  if (discriminant > 0) {
    console.log(`Roots are: x1: ${x_1}; x2: ${x_2}`)
  } else if (discriminant === 0) {
    console.log(`Root is: ${x_1}`)
  } else {
    console.log("There is no roots!")
  }
} else {
  console.log("Invalid input")
}

prompt.close()
