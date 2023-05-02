// Write a recursive function to calculate Fibonacci numbers. Apply a function to
// display the values of the Fibonacci sequence from 0 to 10. (0, 1, 1, 2, 3, 5, 8, 13,
// 21, 34, 55, 89, 144, 233 ... in which each subsequent number is the sum of the
// two previous numbers. F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2, for check it’s possible to
// use: for n = 10 answer is 55)

function fibonacci(F1: number, F2: number, count: number): void {
  console.log(F1, " ")
  if (count > 0) fibonacci(F2, F1 + F2, --count)
}
fibonacci(0, 1, 10)
