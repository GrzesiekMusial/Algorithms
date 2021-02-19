import { setPriority } from "os";
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

function partition(array, left, right) {
    let pivot = right;
    let i = left;
    let j = right;

    let boundary = i - 1;

    while (i < j) {
        while (array[i] < array[pivot]) {
            boundary++;
            i++;
        }

        while (array[i] > array[pivot]) i++;

        while (array[i] <= array[pivot]) swap(array, ++boundary, i++);
    }

    return boundary;
}

export { quickSort };
