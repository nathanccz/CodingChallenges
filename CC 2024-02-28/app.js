//PROBLEM

// I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

// Passwords must abide by the following requirements:

// More than 3 characters but less than 20.

// Must contain only alphanumeric characters.

// Must contain letters and numbers.


//ANALYSIS AND SOLUTION

//Parameters: We're always given strings that can contain letters, numbers, and symbols. No empty strings. 

//Return: The function should return 'VALID' or 'INVALID' (not Boolean values).

//Examples: 

// 'Username123'         ->  'VALID'
// 'a123'                ->  'VALID'
// 'Username123!'        ->  'INVALID'

//Pseudo Code:

//Create an "alphanumeric" array that contains all letters in alphabet and numbers 0 to 9.
//Split the string argument into an array and see if any element is not included in the alphanumeric array.
//Create a condition checking the length of the strings to see if it has more than 3 characters but less than 20.
//Check if the string argument has both numbers and letters. 

function validPass(password) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz', numbers = '0123456789'.split('')
    let alphanumeric = Array.from(alphabet).concat(alphabet.toUpperCase().split(''), numbers)
    let passwordArr = password.split('')
    return (passwordArr.length > 3 && passwordArr.length < 20 && 
            passwordArr.every(char => alphanumeric.includes(char)) &&
            passwordArr.some(char => !Number.isNaN(+char)) &&
            passwordArr.some(char => Number.isNaN(+char))) ? "VALID" : "INVALID"
}