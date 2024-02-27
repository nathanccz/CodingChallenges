//PROBLEM

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.




//ANALYSIS AND SOLUTION

//Parameters: We are given a string of characters which can be letters, symbols, or spaces. No empty strings are expected. 

//Return: The function should return a new string only with parenthesis symbols. The length of the returned string should always be the same as the original string. 

//Examples: "din"      =>  "((("
         // "recede"   =>  "()()()"
         // "Success"  =>  ")())())"
         // "(( @"     =>  "))((" 

//Pseudo Code: 

//Convert the string into all lower case and split into an array 
//Create a new Map object from the array to store the number of times it's repeated
//Map through the array and return a new based on the values stored in the Map
//Return the new array

function duplicateEncode(word) {
    let array = word.toLowerCase().split('')
    let counter = new Map()
    array.forEach(char => {
        if (!counter[char]) counter[char] = 0
        counter.set(counter, counter[char]++)
    })
    return array.map(element => counter[element] === 1 ? '(' : ')').join('')
}