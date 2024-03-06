//PROBLEM

// When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

//     Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
//     Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255

// Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")



//ANALYSIS AND SOLUTION

//Parameters: We're given an hexidecimal color string. Strings won't be empty and they are case-insensitive.

//Return: The function should return an object with "r", "g", and "b" keys with their calculated values. 

//Examples: 

//hexStringToRGB("#FF8321") -> {r: 255, g: 131, b: 33}

//hexStringToRGB("#21ba21") -> {r: 33, g: 186, b: 33}

//{r: 49, g: 186, b: 239}

//Pseudo Code:

//Create a result variable holding an empty object literal. 
//Create an object containing the values of the letters in hexidecimal notation. 
//Turn the hexString into all caps, and create an array that turns all the string numbers into regular numbers.
//Shift the array so that the octothorp is deleted. 
//Loop through the array and target the 0, 2, and 4th indexes.
//Use short circuiting to grab the value of letters, or if it's a regular number default to it. 
//Return the result object. 

function hexStringToRGB(hexString) {
    
    let result = {}

    let letterVals = {
        'A': 10,
        'B': 11,
        'C': 12,
        'D': 13,
        'E': 14,
        'F': 15
    }

    let hexArray = hexString.toUpperCase().split('').map(element => !letterVals[element] ? +element : element)

    hexArray.shift()

    hexArray.forEach((element, index, arr) => {
        
        switch(index) {
            case 0: result['r'] = (letterVals[element] || element) * 16 + (letterVals[arr[1]] || arr[1])
            break
            case 2: result['g'] = (letterVals[element] || element) * 16 + (letterVals[arr[3]] || arr[3])
            break
            case 4: result['b'] = (letterVals[element] || element) * 16 + (letterVals[arr[5]] || arr[5])
            break
        }

    })
    
    return result 
}