function arrayIntersection(arr1, arr2) {
    // Use the filter method to iterate over the first array and return elements that are present in the second array
    const intersection = arr1.filter(item => arr2.includes(item));

    // Use the Set object to remove duplicates (if any) from the intersection array
    return [...new Set(intersection)];
}

// Test the arrayIntersection function with sample inputs
const array1 = [70, 20, 30, 50];
const array2 = [30, 40, 50, 60, 70];
console.log(arrayIntersection(array1, array2));  // Output will be [ 70, 30, 50 ]
