//PROBLEM

// Create a function that takes a string as a parameter and does the following, in this order:

//     1. Replaces every letter with the letter following it in the alphabet (see note below)
//     2. Makes any vowels capital
//     3. Makes any consonants lower case

//This problem should avoid RegEx.


//ANALYSIS AND SOLUTION

//Parameters: We're given a string of numbers that can be upper- or lower-case. The string may include numbers or symbols, and it can be empty. 

//Return: The function should return a new string of equal length to the original string. If the original string has numbers or symbols, the returned string should keep them. 

//Examples: 

//"Cat30" -> 'dbU30'
//"HeLlO14M" -> 'Ifmmp14n'
//"m3()wlasm" 'n3()xmbtn'

//Pseudo Code:

//Declare result variable holding an empty string.
//Turn string into an a array of lower case letters.
//Create an array of letters in the alphabet.
//Create an array of vowels. 
//Loop through the lower case array. Upon each iteration, check if the character is not included in the alphabet array (meaning it's a number or a symbol). If it is, concatenate that character to the results string and end the iteration. 
//If the character is a letter, then create a "next" variable that holds the next letter in the alphabet for each character that we loop through. 
//If that "next" character is a vowel, turn it to upper case and add it to the result string. 
//If the character is "z", always add "A" to the result. 
//Else if the character is not a vowel, simply add that character to the result string. 
//Return the result string. 

function changer(str) {
    let result = ''
    let lowCaseArr = str.toLowerCase().split('')
    let alphabet = Array.from('abcdefghijklmnopqrstuvwxyz')
    let vowels = ['a', 'e', 'i', 'o', 'u',]

    lowCaseArr.forEach(char => {
        if (!alphabet.includes(char)) {
            result += char
        } else {
            let next = alphabet[alphabet.indexOf(char) + 1]
            if (vowels.includes(next)) result += next.toUpperCase()
                else if (char === 'Z' || char === 'z') result += 'A'
                else result += next
        }
    })

    return result
}


