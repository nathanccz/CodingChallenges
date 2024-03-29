/*

PROBLEM

Background - the Collatz Conjecture:

Imagine you are given a positive integer, n, then:

    if n is even, calculate: n / 2
    if n is odd, calculate: 3 * n + 1

Repeat until your answer is 1. The Collatz conjecture states that performing this operation repeatedly, you will always eventually reach 1.

You can try creating Collatz sequences with this kata. For further information, see the wiki page.
Now! Your task:

Given an array of positive integers, return the integer whose Collatz sequence is the longest.



ANALYSIS AND SOLUTTION

Parameters: We're given an array of numbers. Arrays will not be empty.

Return: The function should return a single number. 

Examples:

longestCollatz([1, 5, 27, 4]) -> 27

longestCollatz([75, 226, 113, 340]) -> 75

longestCollatz([75, 113, 226, 75]) -> 75

Pseudo Code:

Create empty array to store sequence lengths. 
For each input number, create count variable then start a while num > 1 loop. 
    In each iteration, check if the number is even (then reassign num to n / 2) or odd (then reassign num to 3 * n + 1). 
    Each iteration should add 1 to the count. 
    At the end of the while loop, push the count to the sequence array.
Return the index of the maximum number in the sequence array mapped to the original input array.
*/


function longestCollatz (inputArray) {
    let lens = []
    inputArray.forEach(num => {
      let count = 0
      while (num > 1) {
        if (num % 2 === 0) num /= 2
          else num = 3 * num + 1
        count++
      }
      lens.push(count)
    })
    return inputArray[lens.indexOf(Math.max(...lens))]
  }