//PROBLEM

//Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.
// Regular Expressions
// Strings



//ANALYSIS AND SOLUTION

//Parameters: We're taking in a single string of letters and numbers. The string will never be empty. 

//Return: The new function should always return a new string.

//Examples: 

//"thisisastringwithoutnumbersatheend" => "thisisastringwithoutnumbersatheend1"
//"thisisastringwithnumbersatheend001" => "thisisastringwithnumbersatheend002"
//"thisisastringwithnumbersatheend099" => "thisisastringwithnumbersatheend100"

//Pseudo Code:

//Turn the original argument into an array and store it in an "array" variable

function incrementString (strng) {

    let array = strng.split('')

    if (Number.isNaN(+array[array.length - 1])) strng += "1" //Check the last element in the array. If we try to convert its type to a number and it ends up being NaN, then concatenate the original string with string "1" and skip to the "return strng" line at the end.

      else { //This else statement will run if there is a number at the end of the array

        let finalDigits = array.splice(array.findLastIndex(char => Number.isNaN(+char)) + 1).join('') //Find the index of the last element of the array that's NaN, add 1 to it to access the first number of the final digits, then splice the array from that index to the end of the array. This should isolate all final digits. Then, join the final digits into a single string. 

        let plusOne = +finalDigits + 1 //Turn the string of finalDigits into a number and add 1
        
        let finalDigitsPlusOne = plusOne.toString().padStart(finalDigits.length, "0") //Since primitive numbers can't have leading zeros, we have to pad the plusOne result with the number of zeros that matches the finalDigits string length. This is important if the final digits are 009 and we need 010 after adding 1. 
        
        return array.join('') + finalDigitsPlusOne //Finally, concatenate the new finalDigitsPlusOne string to the spliced array (joined into a string) and return it
      
    }

    return strng
}