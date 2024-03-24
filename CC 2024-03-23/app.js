/*
PROBLEM

You have two arguments: string - a string of random letters(only lowercase) and array - an array of strings(feelings). Your task is to return how many specific feelings are in the array. 

If the feeling can be formed once - plus one to the answer.

If the feeling can be formed several times from different letters - plus one to the answer.


ANALYSIS AND SOLUTION

Parameters: We're given a string of lower-case letters and an array of strings.

Return: The function should return a new string, possibly using a template literal. 

Examples: 

string -> 'yliausoenvjw'
array -> ['anger', 'awe', 'joy', 'love', 'grief']
output -> '3 feelings.' // 'awe', 'joy', 'love'


string -> 'griefgriefgrief'
array -> ['anger', 'awe', 'joy', 'love', 'grief']
output -> '1 feeling.' // 'grief'


string -> 'abcdkasdfvkadf'
array -> ['desire', 'joy', 'shame', 'longing', 'fear']
output -> '0 feelings.'

Pseudo Code:

Create filtered variable with a filtered array that returns only the worlds where every letter is included in the string argument.

Return the length of filtered in a template literal (if the length isn't 1). Otherwise, return '1 feeling.'

*/

function countFeelings(string, array) {
    const filtered = array.filter(str => str.split('').every(l => string.includes(l)))
    return filtered.length === 1 ? '1 feeling.' : `${filtered.length} feelings.`
  }