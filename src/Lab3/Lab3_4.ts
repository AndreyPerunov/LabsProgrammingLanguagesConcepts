// Write a program which takes a date as three numbers and returns output in
// the form number/string/number eg 12th November 1992. Include error
// checking on the range of acceptable numbers for the day and month, and
// check that the numbers entered for the day are valid for the month (eg
// 30/2/99, or 31/6/02). Show in report that program can handle both valid and
// invalid dates.

import readline from "readline/promises"

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function isMonth(month: string): boolean {
  return parseInt(month) >= 1 && parseInt(month) <= 12
}

function isDay(day: string, month: string, year: string): boolean {
  const daysInMonth = new Date(parseInt(year), parseInt(month), 0).getDate()
  return parseInt(day) >= 1 && parseInt(day) <= daysInMonth
}

function isYear(value: any): boolean {
  return typeof parseInt(value) === "number" && !isNaN(value)
}

function formatDate(day: number, month: number, year: number): string {
  let daySuffix: string
  if (day % 10 === 1) daySuffix = "st"
  if (day % 10 === 2) daySuffix = "nd"
  if (day % 10 === 3) daySuffix = "rd"
  if (day % 10 >= 4 && day % 10 <= 9) daySuffix = "th"
  if (day % 10 === 0) daySuffix = "th"
  if (day >= 11 && day <= 19) daySuffix = "th"

  const monthNames: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const monthName: string = monthNames[month - 1]
  return `${day}${daySuffix} ${monthName} ${year}`
}

const day: string = await prompt.question("Day: ")
const month: string = await prompt.question("Month: ")
const year: string = await prompt.question("Year: ")

if (!isDay(day, month, year)) console.error("Incorect input for day!")
if (!isMonth(month)) console.error("Incorect input for month!")
if (!isYear(year)) console.error("Incorect input for year!")
if (isDay(day, month, year) && isMonth(month) && isYear(year)) console.log(formatDate(parseInt(day), parseInt(month), parseInt(year)))

prompt.close()
