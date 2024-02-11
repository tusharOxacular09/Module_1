function reverseString(str) {
    let reversed = '';  // Initialize an empty string to store the reversed string

    // Iterate through the string characters in reverse order and append to the reversed string
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];  // Append each character to the reversed string
    }

    // Encapsulate the reversed string within double quotation marks and return it
    return '"' + reversed + '"';
}

// Test the reverseString function with a sample string
const inputString = "JavaScript";
console.log(reverseString(inputString));  // Output will be "tpircSavaJ"
