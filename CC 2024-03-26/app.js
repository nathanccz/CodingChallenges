/*

PROBLEM 

Santa is learning programming. And what could be the first program, he wants to write? Yes, the "Hello world!" of Christmas: "Ho Ho Ho!". He wants to write a function ho(), which should have the following return values:

Rules:

    each call of ho() must add a "Ho" to the string
    the "Ho"'s must be separated by a space
    at the end of the string, there must be an exclamation mark (!), without a space



ANALYSIS AND SOLUTION

Parameters: We're given no parameters beyond the return value of ho().

Return: The function should return a string. 

Examples: 

ho(); // should return "Ho!"
ho(ho()); // should return "Ho Ho!"
ho(ho(ho())); // should return "Ho Ho Ho!"

Pseudo Code:

If there are no arguments in the function, return "Ho!".
For each nested function, return the first element in the arguments array and split by exclamation point. 
*/

function ho() {
    return arguments.length === 0 ? "Ho!" : arguments[0].split('!').join(' ') + ho() 
}