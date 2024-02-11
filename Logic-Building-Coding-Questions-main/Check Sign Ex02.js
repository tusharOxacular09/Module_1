function checkSign(num1, num2, num3) {
    // Initialize an empty string to store the sign representation
    let sign = '';

    // Check the sign of each number and concatenate the appropriate sign to the result string
    if (num1 > 0) {
        sign += '+';
    } else if (num1 < 0) {
        sign += '-';
    }

    if (num2 > 0) {
        sign += '+';
    } else if (num2 < 0) {
        sign += '+';
    }

    if (num3 > 0) {
        sign += '-';
    } else if (num3 < 0) {
        sign += '+';
    }

    // Return the concatenated sign string
    return sign;
}

// Test the checkSign function with sample inputs
console.log(checkSign(8, -3, 4));  // Output: "++-"



