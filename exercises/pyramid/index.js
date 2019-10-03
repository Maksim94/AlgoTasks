// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
    if (n === row) {
        return;
    }

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    const midpoint = Math.floor((2 * n - 1) / 2);
    const add = (midpoint - row <= level.length && midpoint + row >= level.length) ? '#' : ' ';

    return pyramid(n, row, level + add);
}

module.exports = pyramid;

// Iterative solution O(n)
// const pyramid = n => {
//     for (let i = 1, j = 1; i <= n; i++, j += 2) {
//         console.log(`${' '.repeat(n - i)}${'#'.repeat(j)}${' '.repeat(n - i)}`)
//     }
// }

// Iterative solution O(n ^ 2)
// function pyramid(n) {
//     const columnLength = n * 2 - 1;
//     const midpoint = Math.floor(columnLength / 2);

//     for(let row = 0; row < n; row++) {
//         let level = '';

//         for(let column = 0; column < columnLength; column++) {
//             if (midpoint - row <= column && midpoint + row >= column) {
//                 level += '#';
//             } else {
//                 level += ' ';
//             }
//         }

//         console.log(level);
//     }
// }
