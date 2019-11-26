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
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        indexOfMin = i;

        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }

        if (i !== indexOfMin) {
            const lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = lesser;
        }
    }

    return arr;
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    const midPoint = Math.floor(arr.length / 2);
    const left = arr.slice(0, midPoint);
    const right = arr.slice(midPoint);

    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

function merge(left, right) {
    const results = [];

    while(left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
