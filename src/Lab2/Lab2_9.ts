// Write a program that prompts the user for a password and provides
// one message if it is correct and another if it is not. What is the best way
// to store and enter a password in order to achieve maximum security?

import inquirer from "inquirer"
import bcrypt from "bcrypt"

inquirer
  .prompt({
    name: "password",
    type: "password",
    message: "Enter password: "
  })
  .then((answers: { password: string }) => {
    const input: string = answers.password
    const salt: string = bcrypt.genSaltSync(Math.random())
    const password: string = bcrypt.hashSync("1234567890", salt)
    console.log(password)

    bcrypt.compareSync(input, password) ? console.log("\nCorrect!") : console.log("\nWrong!")
  })
