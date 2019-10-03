// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowelSet = ['a', 'e', 'i', 'o', 'u'];

const vowels = str => str
    .toLowerCase()
    .split('')
    .reduce((count, char) => vowelSet.includes(char) ? ++count : count, 0);

module.exports = vowels;

// function vowels(str) {
//     const matches = str.match(/[aeiou]/gi);
//     return matches && matches.length || 0;
// }
