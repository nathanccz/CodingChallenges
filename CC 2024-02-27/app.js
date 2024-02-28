// PROBLEM

// Write a function groupIn10s which takes any number of arguments, groups them into tens, and sorts each group in ascending order.

// The return value should be an array of arrays, so that numbers between 0 and9 inclusive are in position 0, numbers between 10 and 19 are in position 1, etc. 



//ANALYSIS AND SOLUTION

//Parameters: We can have any amount of arguments, which will always be numbers.

//Return: The function should return an array of arrays. If the array has an index with nothing in it, return undefined.

//Examples: const grouped = groupIn10s(8, 12, 38, 3, 17, 19, 25, 35, 50) 

// grouped[0]     // [3, 8]
// grouped[1]     // [12, 17, 19]
// grouped[2]     // [25]
// grouped[3]     // [35, 38]
// grouped[4]     // undefined
// grouped[5]     // [50]


//Pseudo Code:

//Create an empty array to store the new array of arrays.

//Create an array from the arguments and sort them in ascending order.

    //Run a forEach loop on each argument of the array, then:

    //Create sub array index variable that divides each argument by 10 and finds the floor, which will let you create indexes in the "grouped" array to store the subarrays.

    //Push each argument into the corresponding subarray of the "grouped" array.

//Return the "grouped" array.


function groupIn10s() {

    let grouped = []
    let arrOfArguments = [...arguments].sort((a, b) => a - b)

    arrOfArguments.forEach(arg => {
        let subArrInd = Math.floor(arg / 10)
        if (!grouped[subArrInd]) grouped[subArrInd] = []
        grouped[subArrInd].push(arg)
    })

    return grouped

}
