function titleCase(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Transform each word to title case using map method
    const titleCaseWords = words.map(word => {
        // Convert the first character to uppercase and the rest to lowercase
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    // Join the title case words back into a sentence
    return titleCaseWords.join(' ');
}

// Example of using the function:
const inputSentence ="Be yourself; everyone else is already taken."; // Replace with the actual sentence
const titleCasedSentence = titleCase(inputSentence);
console.log(`${titleCasedSentence}`);


