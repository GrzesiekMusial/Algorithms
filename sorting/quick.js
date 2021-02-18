import { swap } from "./methods/swap.js";

const quickSort = {
    name: "Quick Sort",
    sort: (arr, start = 0, end = arr.length - 1) => {
        if (start >= end) return;

        const boundary = partition(arr, start, end);

        quickSort.sort(arr, boundary + 1, end);
        quickSort.sort(arr, start, boundary - 1);

        return arr;
    },
};

function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;

    while (i <= j) {
        while (items[i] < pivot) i++;
        while (items[j] > pivot) j--;

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

export { quickSort };
