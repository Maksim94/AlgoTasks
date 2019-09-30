// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false



// const reverseString = str => str.split('').reduce((rev, char) => char + rev, '')
// const palindrome = str => str === reverseString(str);

// Alternative solutions

// Optimized
// function palindrome(str) {
//     const length = str.length;
//     const middle = Math.round(length / 2);
//     let isPalindrome = length && true;

//     for (let i = 0; i <= middle; i++) {
//         if (str[i] !== str[length - 1 - i]) {
//             isPalindrome = false;
//             break;
//         }
//     }

//     return isPalindrome;
// }

const palindrome = str => str
    .split('')
    .every((char, i) => char === str[str.length - 1 - i]);

module.exports = palindrome;
