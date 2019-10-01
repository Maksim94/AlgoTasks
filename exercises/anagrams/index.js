// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const cleanString = str => str.replace(/[^\w]/g, '').toLowerCase();
const sortString = str => str.split('').sort().join('');
const cleanAndSortString = str => sortString(cleanString(str));

// More tricky solution
const anagrams = (stringA, stringB) => {
    return cleanAndSortString(stringA) === cleanAndSortString(stringB);
}

module.exports = anagrams;


/*
const buildCharMap = str => {
    const charMap = {};

    for (let char of cleanString(str)) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

// Common solution
function anagrams(stringA, stringB) {
    const charMapA = buildCharMap(stringA);
    const charMapB = buildCharMap(stringB);
    let isAnagram = false;

    if (Object.keys(charMapA).length === Object.keys(charMapB).length) {
        isAnagram = Object.keys(charMapA).every(char => charMapA[char] === charMapB[char]);
        // isAnagram = !Object.keys(charMapA).some(char => charMapA[char] !== charMapB[char]);
    }

    return isAnagram;
};
*/