/*
PROBLEM:
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.



ANALYSIS AND SOLUTION:

Parameters: We're always given an array of strings. Strings will be lower-case only. No array will be empty. 

Return: The function should return a new array of filtered strings. 

Examples:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"]

dup(["kelless","keenness"]) = ["keles","kenes"]

dup(["heeyyyoooooo","wwwworrllllllllddd","whatisup"]) = ['heyo', 'world', 'whatisup']

Pseudo Code: 

1. Map the array to target each string.
2. Create newStr variable with an empty string.
3. Create for loop that iterates through each string.
4. If any letter in the target string doesn't match the last character in newStr, contenate that letter to the newStr.
5. Return newStr in every iteration in the map loop. 
*/

function dup(s) {
    return s.map(str => {
      let newStr = ''
      for (let i = 0; i < str.length; i++) {
        if (newStr[newStr.length - 1] !== str[i]) newStr += str[i]
      }
      return newStr
    })
}