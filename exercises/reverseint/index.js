// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


const reverseString = str => [...str].reduceRight((acc, curr) => acc + curr, '');

// function reverseInt(n) {
//     const intString = n.toString();

//     return Math.sign(n) >= 0
//         ? +reverseString(intString)
//         : -1 * reverseString(intString.slice(1));
// }

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const reverseInt = n => pipe(
    String,
    reverseString,
    parseInt,
    x => x * Math.sign(n)
)(n);

module.exports = reverseInt;
