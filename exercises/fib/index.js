// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// Alternative recursive solution; O(2 ^ n) - exponential
function fib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

const memoize = fn => {
    const cache = {};

    return (...args) => {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn(...args);
        cache[args] = result;

        return result;
    }
}

// With memo to have O(n) runtime complexity
fib = memoize(fib);

module.exports = fib;

// Alternative iterative solution O(n)
// const fib = n => {
//     const sequence = [0, 1];

//     for(let i = 2; i <= n; i++) {
//         sequence.push(sequence[i - 1] + sequence[i - 2]);
//     }

//     return sequence[n]; // sequence[sequence.length - 1]
// }

// Iterative solution O(n)
// const fib = n => {
//     let a = 0;
//     let b = 1;

//     for(let i = 1; i < n; i++) {
//         // const temp = b;
//         // b = a + b;
//         // a = temp;
//         [a, b] = [b, a + b];
//     }

//     return b;
// }
