//PROBLEM

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.


//ANALYSIS AND SOLUTION

//Parameters: We're always given a valid URL string. No strings will be empty.

//Return: The function should return a string containing the domain name only. 

//Examples: 

// url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// url = "https://www.cnet.com"                -> domain name = "cnet"

//Pseudo Code:

//Split string into array using a period deliminator.
//Create function to find the last index of a forward slash in the first array element. 
//Create firstThree variable that contains first three letters in array element as a string.
//Create switch case that checks firstThree.
    //If "htt" and includes 'www'? return first array element, otherwise slice array from last slash to the end.
    //If 'www' return second element of array.
    //Else return first element of array.


function domainName(url) {
    const array = url.split('.')
    const findSlash = str => [...str].findLastIndex(char => char === '/')
    const firstThree = array[0].split('').slice(0,3).join('')
    
    switch (firstThree) {
      case 'htt': return array[0].includes('www') ? array[1] : 
                       [...array[0]].slice(findSlash(array[0]) + 1).join('')
      case 'www': return array[1]
      default: return array[0]
    } 
}

