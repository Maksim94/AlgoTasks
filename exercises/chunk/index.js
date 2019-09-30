// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while(index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;
}

module.exports = chunk;


// function chunk(array, size) {
//     const chunked = [];

//     for (element of array) {
//         const last = chunked[chunked.length - 1];

//         if (!last || last.length === size) {
//             chunked.push([element]);
//         } else {
//             last.push(element);
//         }
//     }

//     return chunked;
// }

// Alternative solutions

// function chunk(array, size) {
//     let chunked = [];

//     for(let i = size; i <= array.length; i += size) {
//         chunked.push(array.slice(i - size, i));
//     }

//     if (chunked.length < Math.ceil(array.length / size)) {
//         chunked.push(array.slice(-1 * array.length % size));
//     }

//     return chunked;
// }

// function chunk(array, size) {
//     const chunked = [];
//     let index = 0;

//     array.forEach((item, i) => {
//         if ((i + 1) % size === 0) {
//             chunked.push(array.slice(index, size + index));
//             index = i + 1;
//         }
//     });

//     if (chunked.length < array.length / size) {
//         chunked.push(array.slice(index))
//     };

//     return chunked;
// }

// const chunk = (array, size) => array.reduce((acc, curr) => {
//     const last = acc[acc.length - 1];

//     if (!last || last.length === size) {
//         acc.push([curr]);
//     } else {
//         last.push(curr);
//     }

//     return acc;
// }, []);
