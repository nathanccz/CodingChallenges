//CHALLENGE

// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.




//ANALYSIS AND SOLUTION

//Parameters: The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

//Return: We'll always return an array of two numbers (the two indices we need to match the target number). 

//Examples:

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
// twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]

//Pseudo Code:

//Create a result variable to store our new array.
//Run a forEach loop on the numbers array. For each number in the array, create a shallow copy of the original array without the current element and see if any element in the copied array is equal to the difference between the target number and the current element/number.
//Once that condition is met, put the indices of those numbers in the results variable and return it. 



function twoSum(numbers, target) {

    let result 
      
    numbers.forEach((num,ind,arr) => {
      if (arr.slice(0, ind).concat(ind + 1).includes(target - num)) {
        result = [ind, numbers.indexOf(target - num)]
      }
    })
    
    return result

}