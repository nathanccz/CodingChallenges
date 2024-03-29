/*

PROBLEM

Program channels into your TV's memory. An array with channels (strings) will be passed as an argument to the function redarr(). Sort the channels in an alphabetical order, remove duplicates and, finally, return an object where each channel (object's value) is assigned to a whole number (objects's key), starting with 0.



ANALYSIS AND SOLUTION

Parameters: We're given an array of strings that may contain duplicate strings. 

Return: The function should return a new object with numerical keys and string values. 

Examples: 

const arr = ["BBC1", "BBC2", "MTV"];

    redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}

const arr = ["BBC1", "BBC1", "BBC2", "MTV"];

    redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}

Pseudo Code:

Create 'uniques' variable that sorts and filters the duplicate strings in the array.

Return uniques array, reduced to an object, where each index is a key that holds the current string. 

*/

function redarr(arr) {
  
    const uniques = arr.sort().filter((item,ind,arr) => arr.indexOf(item) === ind)
    
    return uniques.reduce((obj,curr,ind) => {
      obj[ind] = curr
      return obj
    }, {} )
  
}