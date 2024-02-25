//PROBLEM

// We want to extend the array class so that it provides a contains_all? method. This method will always assume that an array is passed in and will return true if all values in the passed in array are present within the current array.

// For example:

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// items.containsAll([1, 2, 3]);  =>  true
// items.containsAll([1, 5, 13]);  =>  false // because 13 is not in the items array


//ANALYSIS AND SOLUTION

//Parameters: We expect to be given two arrays: One that will be appended with the containsAll method, and another array that will be passed into that new method. Either array can be empty. If an array isn't empty, all elements should be numbers. 

//Return: New method should return a Boolean value indicating whether all values in the array argument are present in the current array.

//Examples: 

//   [1, 2, 3, 4, 5, 6, 7, 8, 9].containsAll([1, 2, 3]) -> true
//   [1, 2, 3, 4, 5, 6, 7, 8, 9].containsAll([]) -> true
//   [1, 2, 3, 4, 5, 6, 7, 8, 9].containsAll([9, 15]) -> false

//Pseudo Code: 

//Use the Object.defineProperty method to create a new "containsAll" method in the Array prototype

Object.defineProperty(Array.prototype, "containsAll", { value: function containsAll(a) { 
    //The value property should be a function that takes in an array and compares it to "this" (the array that the containsAll method is appended to). 

    return a.every(element => this.includes(element)) //Use an "every" method on the array argument to test whether "this" ".includes()" every element in the argument

} } )



