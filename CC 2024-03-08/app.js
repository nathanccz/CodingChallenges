//PROBLEM

// Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals:

//     1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC
//     2008 is written as 2000=MM, 8=VIII; or MMVIII
//     1666 uses each Roman symbol in descending order: MDCLXVI.

// Input range : 1 <= n < 4000

// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").


//Examples: 

// to roman:
// 2000 -> "MM"
// 1666 -> "MDCLXVI"
//   86 -> "LXXXVI"
//    1 -> "I"

// from roman:
// "MM"      -> 2000
// "MDCLXVI" -> 1666
// "LXXXVI"  ->   86
// "I"       ->    1



//ANALYSIS AND SOLUTION

//Parameters: We're given a string of Roman numbers to convert to a number value, or we're given a number value to convert to a string of Roman numbers. Strings won't empty, and numbers will be greater than zero and less than 4000. 

//Return: We'll always return either a string or a number, depending on the input that's passed into the corresponding RomanNumerals method. 

//Examples: 

// to roman:
// 2000 -> "MM"
// 1666 -> "MDCLXVI"
//   86 -> "LXXXVI"
//    1 -> "I"

// from roman:
// "MM"      -> 2000
// "MDCLXVI" -> 1666
// "LXXXVI"  ->   86
// "I"       ->    1


//Pseudo Code:

//Create a map of Roman numbers and number value pairs.

//Define two RomanNumerals static methods: one that converts a number to Roman numerals and another one that does the reverse.

//For the number to Roman numeral method: Create a while loop that finds the first value in the converter object that is equal to or less than the number argument; then, subtract that converter value from the number argument, add the key of the value to a result string, and repeat the loop until the number argument is zero. Return the result.

//For the Roman numeral to number method: Sort the converter keys so that the keys with two letters appear first in the array. Then, create a while loop that goes through each key in the sorted array and matches itself to the original string; then, add the value of that key (from the converter object) to a sum and delete that key from the original string using the replace function. Repeat this until the original string is empty (i.e. when the string length is zero). Return the sum. 


const converter = {
    'M': 1000,
   'CM': 900,
    'D': 500,
   'CD': 400,
    'C': 100,
   'XC': 90,
    'L': 50,
   'XL': 40,
    'X': 10,
   'IX': 9,
    'V': 5,
   'IV': 4,
    'I': 1
}

class RomanNumerals {
 static toRoman(num) {
   let result = ""
   while (num > 0) {
       let subKey = Object.keys(converter).find(key => converter[key] <= num)
       result += subKey
       num -= converter[subKey]
   }
   return result
}

 static fromRoman(str) {
   let sum = 0
   let doubleDigitsFirst = Object.keys(converter).sort((a, b) => b.length - a.length)
   while (str.length > 0) {
       let subNumeral = doubleDigitsFirst.find(key => str.includes(key))
       sum += converter[subNumeral]
       str = str.replace(subNumeral, "")
   }
   return sum
 }
}

