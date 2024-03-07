//PROBLEM

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.



//ANALYSIS AND SOLUTION

//Parameters: We're given a string of characters, and it could be empty. Characters with different cases should be treated separately from one another. 

//Return: The function should return an object with unique keys for each unique character in the string, with a number value indicating how many times it appears in the string. 

//Examples: 

//'aba' -> {'a': 2, 'b': 1}
//'unuai' -> {u: 2, n: 1, a: 1, i: 1}
//'AsdADS' -> {A: 2, s: 1, d: 1, D: 1, S: 1}

//Pseudo Code:

//Create result variable containing empty object literal. 
//Initiate a for loop that goes through each character of the string.
//If a character doesn't exist as a key in the results object, then create one and set it to 0 and add 1 to it. 
//If a character already exists as a key in the results object, add one to that key's value.
//Return the results object. 

function count(string) {
    let result = {}
    for (let i = 0; i < string.length; i++) {
      if (!result[string[i]]) result[string[i]] = 0
      result[string[i]]++
    }
    return result
  }