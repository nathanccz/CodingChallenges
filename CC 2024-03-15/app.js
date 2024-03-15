//PROBLEM

// Give you an array arr that contains some numbers(arr.length>=2), and give you a positive integer k. Find such two numbers m,n: m and n at least a difference of k, and their index is the most distant.

// Returns their distance of index. If no such number found, return -1.



//ANALYSIS AND SOLUTION

//Parameters: We're given an array of numbers and a single digit. Arrays will not be empty. 

//Return: The function should return a single number indicating the furthest distance of indices. 

//Examples: 

// furthestDistance([8,7,1,9],100) === -1
// furthestDistance([1,2,3,4],1) === 3 (1 and 4)
// furthestDistance([3,4,1,2],2) === 2 (3 and 1 or 4 and 2)

//Pseudo Code:

//If the max value in the array minus the min value of the array is less than "k", return -1.
//Create differences variable containing empty array.
//Create a nested forEach loop that checks each number in the array against all the other numbers in the array. 
//If the difference between any two numbers is greater than "k", push the difference of their indices to the differences array. (Use Math.abs for each difference operation.)
//Return the maximum value in the differences array. 


function furthestDistance(arr, k) {

    if (Math.max(...arr) - Math.min(...arr) < k) return -1

    let differences = []
    
    arr.forEach((num, ind, array) => {
        array.forEach((n, i) => {
            if (Math.abs(num - n) >= k) {
                differences.push(Math.abs(ind - i))
            }
        })
    })

    return Math.max(...differences)

}