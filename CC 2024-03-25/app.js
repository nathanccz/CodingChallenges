/*
PROBLEM

Given a sequence of integers, check whether it is possible to obtain a strictly increasing sequence by erasing no more than one element from it.



ANALYSIS AND SOLUTION

Parameters: We're given an array of numbers. Arrays won't be empty. 

Return: The function should return a Boolean value. 

Examples:

almostIncreasingSequence([1, 1, 1, 2, 3]) -> false
almostIncreasingSequence([10, 1, 2, 3, 4, 5]) -> true
almostIncreasingSequence([1, 3, 2]) -> true

Pseudo Code:

Create for-loop that traverses the sequence.

Upon each iteration, create a filtered array that contains all indexes except for the iterator number. 

Slice the filtered array up to, but not including, the final element. 

Check if every number in the sliced array is less than the subsequent number in the non-sliced filtered array. If that condition is met, return true and exit the loop. 

If all loops end and the condition isn't met, return false outside of the for-loop. 
*/

function almostIncreasingSequence(sequence) {
    for (let i = 0; i < sequence.length; i++) {
      const filtered = sequence.filter((num, ind) => ind !== i)
      if (filtered.slice(0, -1).every((n, i) => n < filtered[i + 1])) return true
    }
    return false
}