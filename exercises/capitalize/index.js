// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {}


const capitalize = str => str
    .split(' ')
    .map(char => char[0].toUpperCase() + char.slice(1))
    .join(' ');
    // .reduce((str, word) => `${str ? str + ' ' : ''}${word.charAt(0).toUpperCase()}${word.slice(1)}`, '')


// Solution without using an array
// const capitalize = str => {
//     let result = str[0].toUpperCase();

//     for (let i = 1; i < str.length; i++) {
//         const char = str[i];
//         const prev = str[i - 1];

//         if (prev !== ' ') {
//             result += char;
//         } else {
//             result += char.toUpperCase();
//         }
//     }

//     return result;
// }

module.exports = capitalize;
