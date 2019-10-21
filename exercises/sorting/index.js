// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    let isSorted = false;
    let lastUnsorted = arr.length - 1;

    while(!isSorted) {
        isSorted = true;
        for(let j = 0; j < lastUnsorted; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSorted = false;
            }
        }
        lastUnsorted--;
    }

    return arr;
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
