// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const symbol = 's';
    const counters = [0];
    const array = [root, symbol];

    while(array.length > 1) {
        const node = array.shift();

        if (node === symbol) {
            counters.push(0);
            array.push(node);
            continue;
        }
        
        array.push(...node.children);
        counters[counters.length - 1]++;
    }

    return counters;
}

module.exports = levelWidth;
