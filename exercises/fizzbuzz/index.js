// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// Alternative solution
// const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
// const numToObj = n => ({ n, msg: '' });

// const iterator = n => fn => {
//     for(let i = 1; i <=n; i++) {
//         fn(i);
//     }
// }

// const fizzify = ({ n, msg }) => ({
//     n,
//     msg,
//     ...Object.assign({}, n % 3 === 0 && { msg: msg += 'fizz'})
// });

// const buzzify = ({ n, msg }) => ({
//     n,
//     msg,
//     ...(n % 5 === 0 ? { msg: msg += 'buzz' } : null)
// });

// const log = ({ n, msg }) => console.log(msg || n);

// const fizzBuzz = n => iterator(n)(
//     pipe(
//         numToObj,
//         fizzify,
//         buzzify,
//         log,
//     )
// );

// function fizzBuzz(n) {
//     for(let i = 1; i <= n; i++) {
//         let message = '';

//         if (i % 3 === 0) {
//             message += 'fizz';
//         }

//         if (i % 5 === 0) {
//             message += 'buzz';
//         }

//         console.log(message || i);
//     }
// }

function fizzBuzz(n) {
    for(let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i)
        }
    }
}

module.exports = fizzBuzz;
