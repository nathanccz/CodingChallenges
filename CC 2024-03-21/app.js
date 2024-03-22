/*
PROBLEM

Snail Sort

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]




ANALYSIS AND SOLLUTION

Parameters: We're given an array of arrays containing numbers. Numbers may be repeated across arrays. We may be given an empty array representing a 0x0 grid.

Return: The function should return an array of numbers, or an empty array if given an empty grid. 

Examples: 

snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) 

    result -> [ 1, 2, 3, 6, 9, 8, 7, 4, 5]

snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]) 

    result -> [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]

snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]])

    result -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]

Pseudo Code:

Create result variable with empty array.
Create a copy of the array to mutate.
While some row in the copied array isn't empty:
    Push every number in the top row to "result".
    Shift (delete) the first row.
    For each row that is not the last row, pust the last element to "result" and pop().
    For last row, reverse and add numbers to "result".
    Pop (delete) the last row.
    Reverse copied array and add each first number to "result" and shift first number. 
    Repeat until all rows are empty.
Return result.
*/

const snail = function(array) {
    let result = []
    let copyofArr = array
    
    while (copyofArr.some(row => row.length > 0)) {
  
      for (let num of copyofArr[0]) {
        result.push(num)
      }
      copyofArr.shift()
      
      copyofArr.forEach((row, ind) => {
        if (ind < copyofArr.length - 1) {
          result.push(row[row.length - 1])
          copyofArr[ind].pop()
        } else {
          row.slice().reverse().forEach((num) => {
            result.push(num)
          })
          copyofArr.pop()
        }
      })
      copyofArr.slice().reverse().forEach(row => {
          result.push(row.shift())
      })
    }  
    return result
  }