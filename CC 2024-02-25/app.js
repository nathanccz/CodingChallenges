//PROBLEM

// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.


//ANALYSIS AND SOLUTION

//Parameters: We'll always be given an array of numbers. No empty arrays. 

//Return: The function should return the a number that occurs most frequently in the array. If more than one number occurs the same the number of times, return the higher number. 

//Examples: [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
         // [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
         // [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

//Pseudo Code:

//Create new Map object that holds all unique numbers, each with a value indication how many times it occurs in the array. 

//In the Map object, find highest value then filter out all the keys that don't have the max value. If there are more than one, use math max to find and return the higher key. 

function highestRank(arr){
    let counter = new Map()
    arr.forEach(element => {
        if (!counter[element]) counter[element] = 0
        counter.set(element, counter[element]++)
    })
    let max = Math.max(...Object.values(counter))
    let maxKeys = Object.keys(counter).filter(key => counter[key] === max)
    return Math.max(...maxKeys)
}