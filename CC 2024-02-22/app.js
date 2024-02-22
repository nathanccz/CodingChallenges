//PROBLEM

// A palindrome is a word, phrase, number, or other sequence of symbols or elements, whose meaning may be interpreted the same way in either forward or reverse direction. Famous examples include "Amore, Roma", "A man, a plan, a canal: Panama" and "No 'x' in 'Nixon'". - wikipedia

// Our goal is to determine whether or not a given string is a valid palindrome or not.

// You can see that they are case insensitive and disregards non alphanumeric characters. In addition to a few predefined tests, your function will also be tested against a random string generator 50 times which are guaranteed to produce valid palindromes.

// Notes:

// The empty string "" can be read forward or backward the same, it's a palindrome in our case.




//ANALYSIS AND SOLUTION

//Parameters: We'll always be given a string. It can have letters (upper and lower case) and punctuation marks. The string can also be empty. 

//Return: The function should return a Boolean value indicating whether the string is a palindrome or not. Punctuation marks should not affect the return value and should be ignored. 

//Examples: // "Amore, Roma" => valid
            // "A man, a plan, a canal: Panama" => valid
            // "No 'x' in 'Nixon'" => valid
            // "Abba Zabba, you're my only friend" => invalid

//Pseudo Code:

function palindrome(string) {

    let alphanumeric = Array.from("abcdefghijklmnopqrstuvwxyz123456789")  //Create an array of letters and numbers to compare against the string argument.

    let originArr = string.toLowerCase().split('').filter(char => alphanumeric.includes(char)) // Convert all letters in the string to lower case, split it into an array, and filter out any element that is not included in the alphanumeric array (i.e., filter out all spaces and punctuation.)

    let reverse = originArr.slice().reverse() //Create a copy of the originArr array and reverse it

    return originArr.some((char, ind) => reverse[ind] !== char) ? false : true //Return false if any element in the originArr array and its index doesn't match the same element and index of the reversed array. Return true otherwise.

  }