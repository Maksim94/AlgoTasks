// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Recursive solution
function steps(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }

    stair += stair.length <= row ? '#' : ' ';

    steps(n, row, stair);
}

module.exports = steps;


// Optimized iterative solution O(n)
// const steps = n => {
//     const symbol = '#';

//     for(let i = 1; i <= n; i++) {
//         console.log(`${symbol.repeat(i)}`.padEnd(n));
//     }
// }

// Common iterative solution O(n^2)
// function steps(n) {
//     for(let row = 0; row < n; row++) {
//         let stair = '';

//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }

//         console.log(stair);
//     }
// }
