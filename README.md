# Programming Languages Concepts Labs

## Quick start

- Use `git clone https://github.com/AndreyPerunov/LabsProgrammingLanguagesConcepts.git` to clone repository
- Use `npm i` to install necessary packages.
- Use `npm run build` to compile *TypeScript* to *JavaScript*
- Use `npm run test 4 3` to run specific file. First number `4` is **Lab**, second `3` is **Task** you want to execute.
    -Lab `1` : `6` tasks.
    -Lab `2` : `10` tasks.
    -Lab `3` : `7` tasks.
    -Lab `4` : `4` tasks.

## Lab 1

**Topic**: Basic Operators in Programming Language.

**Task**:
1. (Type integer, arithmetic operators, integer operators) Write a program which reads two integers and then displays a) their product and b) their quotient when the first is dividend (DIV) by the second.
2. (Type real, format descriptor) Write a program which accepts three real numbers, computes their sum and outputs the result. Amend the program so that the result is output to 2 dp.
3. Write a program that takes in the width, length and height of a room in metres and returns the volume of the room in cubic metres. Give the answer in cubic centimetres as well. Choose integer or real as you think fit.
4. Ask the user his age in years and then tell him how old he is going to be on his next birthday.
5. (div, mod) Write a program to express a number of days in weeks and days.
6. (div, mod) Express a given number of seconds in terms of hours, minutes and seconds.

## Lab 2

**Topic**: Basic Operators in Programming Language.

**Task**:
1. Write a program which finds the roots of a quadratic equation from the three coefficients (a, b, c) using the formula roots= (-b +- sqrt(b ^2 - 4ac)) / 2a. (a is the coefficient for x2 b for x and c for the numeric part.)
2. Write a program which accepts two real numbers, asks whether the user requires a rounded or truncated result and then outputs their product in the form requested.
3. (If..then, transformation) Write a program which accepts a temperature value and then offers the user a choice between converting from C to F or from F to C.
4. The program asks the user to input two integer numbers; the two numbers are then divided. The output on the screen should show the integer part of the answer together with the remainder. An example of what is expected is given below. E.g. If 11 and 3 are the two numbers, the output should show: 11/3 = 3 remainder 2
5. The program asks the user to type in 3 numbers of real type. The program calculates the average for the numbers and displays the result to 2 decimal places.
6. Program will calculate the area and perimeter of a rectangle when the user types the length and breadth. The results will be appropriately displayed on the screen.
7. The user will input his/her age (integer type). The program will check if the user is able to apply for a driving license. If the user is of legal age (i.e. 18), the program will encourage the user to apply. Otherwise, the program will calculate the number of years remaining till the age of 18.
8. The user is required to input whole numbers. The program uses a loop to add up these numbers. Everything stops when the user enters ‘0’ (zero).
9. Write a program that prompts the user for a password and provides one message if it is correct and another if it is not. What is the best way to store and enter a password in order to achieve maximum security?
10. (Constants, fixed value, transformation ) Write a program which takes the radius of a circle as input and returns its area and circumference (pi = 3.14159).

## Lab 3

**Topic**: Strings & Arrays in Programming Language.

**Task**:
1. Calculate the length.
2. Write a program that reads a first name and a second name from the user and joins them together in a single string (concatenation).
3. Convert number to string and back (StrToInt, IntToStr).
4. Write a program which takes a date as three numbers and returns output in the form number/string/number eg 12th November 1992. Include error checking on the range of acceptable numbers for the day and month, and check that the numbers entered for the day are valid for the month (eg 30/2/99, or 31/6/02). Show in report that program can handle both valid and invalid dates.
5. Write a program to read and store n elements of an array. Display n elements of the array in reverse order. Find the average of n numbers and display it on the screen.
6. Calculate a 4 by 4 matrix (enter a 4 by 4 matrix row by row) and display sum of all elements.
7. Write a program that generates an array containing 40 random integer numbers from a given range(when displaying array elements on the screen, place the values in 5 columns).Set the range of values and the number of elements of the array as character constants. Range of values: 0 .. 9.

## Lab 4

**Topic**: Procedures and Functions in Programming Language.

**Task**:
1. Write procedure Maximum for three real numbers that accepts from the keyboard.
2. Write two functions of a number raised to the square. In the first function parameter transmits by value, in the second – by reference
3. Write a recursive function to calculate Fibonacci numbers. Apply a function to display the values of the Fibonacci sequence from 0 to 10. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ... in which each subsequent number is the sum of the two previous numbers. F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2, for check it’s possible to use: for n = 10 answer is 55)
4. Use recursive method to calculate the factorial of a number entered by the user (5! = 1 * 2 * 3 * 4 * 5 and will be equal to 120. Note: that 0! = 1. Factorial is defined only for positive integers numbers).
