/*
PROBLEM

Write a function that takes an array that may have other arrays nested indefinitely within, and reverses that array and every array within.


ANALYSIS AND SOLUTION

Parameters: We're given an array of nested arrays and numbers. 

Return: The function should return a new array of the same length as the parameter. 

Examples:

deepReverse([[50,51,[52,53]],[[54,55],56,57]]) 

        -> [[57,56,[55,54]],[[53,52],51,50]]

deepReverse([[9,8,7],[6,5,4],[3,2,1]]) 

        -> [[1,2,3],[4,5,6],[7,8,9]]

deepReverse([1000,1001,1002,1003,[1004,[1005,1006,1007,[1008,1009,1010]]], [1011],[1012,1013,1014], [1015,1016,1017]])

        -> [[1017,1016,1015],[1014,1013,1012],[1011],[[[1010,1009,1008],1007,1006,1005],1004],1003,1002,1001,1000]

Pseudo Code:

Create traverse function.

For each item in the array: 

    If it's an array and contains an array, pass it recursively back into the traverse function.

    If the item is an array, reverse it.

    When recursion is complete, return the entire outer array reversed. 

Pass the array argument into the traverse function and return. 
*/

function deepReverse(l){
    
    const traverse = arr => {
      arr.forEach(element => {
        if (Array.isArray(element) && element.some(el => Array.isArray(el))) {
          traverse(element)
        } else if (Array.isArray(element)){
          element.reverse()
        } 
      })
      return arr.reverse()
    }
    
    return traverse(l)
}

