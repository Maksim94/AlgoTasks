// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
// const createCharsObject = str => str
//     .split('')
//     .reduce((acc, curr) => {
//         if (!acc[curr]) acc[curr] = 0;
//         acc[curr]++;
//         return acc;
//     }, {});

// const findMaxObjProp = obj => {
//     let resEntry = [0, -Infinity];

//     Object.entries(obj).forEach(entry => {
//         if (entry[1] >= resEntry[1]) resEntry = entry;
//     });

//     return resEntry[0];
// }

// const maxChar = str => pipe(
//     createCharsObject,
//     findMaxObjProp,
// )(str);

function maxChar(str) {
    const charMap = {};
    let max = -Infinity;
    let maxChar = '';

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

maxChar('Hello There!');

module.exports = maxChar;
