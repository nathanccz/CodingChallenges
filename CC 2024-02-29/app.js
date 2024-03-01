//PROBLEM

// Ore Numbers (also called Harmonic Divisor Numbers) are numbers for which the harmonic mean of all their divisors (including the number itself) equals an integer.

// For example, 6 is an Ore Number because its harmonic mean is exactly 2:

// H(6) = 4 / (1/1 + 1/2 + 1/3 + 1/6) = 2

// Your task is to complete the function returns true if the given number is an Ore Number and false otherwise.

// You can assume all inputs will be valid positive integers.

// Hint: The harmonic mean is the total number of divisors divided by the sum of their reciprocals.




//ANALYSIS AND SOLUTION

//Parameters: We are always giving a positive integer

//Return: The function should return a Boolean value of the number is an Ore number. 

//Examples:

// isOre(6), true

// isOre(10), false 

// isOre(28), true

//Pseudo Code:

//Create a divisors variable to store divisors in an array. Should be empty at first. 
//Run a for loop that checks if any number up to the given argument is a divisor of that number. 
//Divide the divisors array length by the sum all the inverses of each numbers in the array.
//Return a Boolean value as a result of the .IsInteger method. 

function isOre(n) {
    const divisors = []
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) divisors.push(i)
    }
    let result = +(divisors.length / +divisors.reduce((sum, curr) => sum + 1 / curr, 0)).toFixed(4)
    return Number.isInteger(result)
}
