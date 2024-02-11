function titleCase(sentence) {
    const words = sentence.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    return words.join(' ');
}

// Example of using the function in a browser console:
const inputSentence = "Be yourself; everyone else is already taken."; // Replace with the actual sentence
const titleCasedSentence = titleCase(inputSentence);
console.log(`${titleCasedSentence}`);
