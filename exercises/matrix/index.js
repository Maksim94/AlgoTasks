// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = Array.from({ length: n }, () => []);

    let count = 1;
    let startRow = 0;
    let startColumn = 0;
    let endRow = n - 1;
    let endColumn = n - 1;

    while(startRow <= endRow && startColumn <= endColumn) {
        // Top row
       for (let i = startColumn; i <= endColumn; i++) {
           results[startRow][i] = count++; 
       }
       startRow++;

       // Right column
       for(let i = startRow; i <= endRow; i++) {
           results[i][endColumn] = count++;
       }
       endColumn--;

       // Bottom row
       for(let i = endColumn; i >= startColumn; i--) {
           results[endRow][i] = count++;
       }
       endRow--;

       // Left column
       for(let i = endRow; i >= startRow; i--) {
           results[i][startColumn] = count++;
       }
       startColumn++;
    }

    return results;
}

module.exports = matrix;
