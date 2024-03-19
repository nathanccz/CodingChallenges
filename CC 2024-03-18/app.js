/*
PROBLEM

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.


ANALYSIS AND SOLUTION

Parameters: We're always given an array that contains one or more numbers, or it can be empty. 

Return: The function should return a new array of numbers (or an empty array if necessary).

Examples:

arrayDiff([1,2],[1]) === [2]

arrayDiff([1,2,2,2,3],[2]) === [1,3]

arrayDiff([1,2,2,2,3],[1,2,3]) === []

Pseudo Code:

Create result variable with empty array.
For each number in "a", if "b" doesn't include that num, push it to "result".
Return result. 

*/


function arrayDiff(a, b) {
    let result = []

    a.forEach(num => {
        if (!b.includes(num)) result.push(num)
    })

    return result
}