/*

PROBLEM

In this task, you need to write a function each, that takes an integer number n and a ( possibly empty ) list of integers, and returns a list of every nth element of the input list ( which possibly is the empty list ).

If n < 0, count by abs n from the end of the list.
If n == 0, return an empty list. 




ANALYSIS AND SOLUTION

Parameters: We're given a number (either positive or negative) and an array of numbers. 

Return: The function should return a new array, and the returned array may be empty. 

Examples: 

each 0 [1,2,3,4,5,6] = []  

each 1 [1,2,3,4,5,6] = [1,2,3,4,5,6]

each (-1) [1,2,3,4,5,6] = [6,5,4,3,2,1] 

Pseudo Code:

Create function expression to filter array so that it contains only the indexes where index + 1 % n  === 0
If n >= 0, filter the array normally. Else, reverse array and filter. 

*/


function each(n, xs) {
    const filterInds = arr => arr.filter((num, ind) => (ind + 1) % Math.abs(n) === 0)
    return n >= 0 ? filterInds(xs) : filterInds(xs.reverse())
}