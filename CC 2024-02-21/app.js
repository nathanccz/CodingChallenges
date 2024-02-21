//PROBLEM

// Write a function that given two strings determines if they differ by exactly one character.

// The difference may consist of one charater being added, removed or replaced, in which case the function must return true. In all other cases it must return false.



//ANALYSIS AND SOLUTION

//Parameters: We're given two strings of letters. Strings won't be empty, and there are no special characters.


//Return: The function should return a Boolean value indicating whether the strings are off by one character. Return false if they're the same string or differ by more than one letter (if a word has an extra character AND one of the letters is different, return false)


// Examples:

// tower / towe -> true
// tower / towner -> true
// tower / bower -> true
// tower / token -> false
// tower / tower -> false


//Pseudo Code:

//We need to find which string is shorter and which is longer. 

//Put each string in an array and sort it based on the string length. 

//If the lengths of the two strings differ by more the one, always return false.

//If the the lengths differ by exactly one, check if every letter in the longer string includes every letter in the shorter string. 

//Otherwise, if the strings have equal lengths, filter the first string (joined as an array) to keep any elements that differ from the second string. If the length of that filtered string is exactly one, return true, else false. 

function oneCharDifference(s1, s2) {
  
    let sorted = [s1, s2].sort((a, b) => a.length - b.length)
    let smallerStr = sorted[0], longerStr = sorted[1]
   
    if (longerStr.length - smallerStr.length > 1) {
        return false
      
    } else if (longerStr.length - smallerStr.length === 1) {
        return smallerStr.split('').every(l => longerStr.includes(l)) ? true : false
      }
    
      else {
        return s1.split('').filter((l, i) => s2[i] !== l).length === 1 ? true : false
     }
    
  } 