//PROBLEM 

// Array inversion indicates how far the array is from being sorted.

// Inversions are pairs of elements in array that are out of order.



//ANALYSIS AND SOLUTION

//Parameters: We're given an array of numbers that are sorted . The array can be empty. 

//Return: The function should return a single number indicating how many inversions occur in the array. 

//Examples: 

// [1, 2, 3, 4]  =>  0 inversions
// [1, 3, 2, 4]  =>  1 inversion: 2 and 3
// [4, 1, 2, 3]  =>  3 inversions: 4 and 1, 4 and 2, 4 and 3

//Pseudo Code:

//Create a sum variable and set it to 0. 
//Initiate a nest for loop that adds one to the sum if current array is greater than any element after it.
//Return sum. 

function countInversions(array) {
    
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) sum++
        }
    }
    return sum 
}


