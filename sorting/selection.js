import { swap } from "./methods/swap.js";

const selectionSort = {
    name: "Selection Sort",
    sort: (arr) => {
        for (let i = 0; i < arr.length - 1; i++) {
            let minimumIndex = i;
            for (let j = i; j < arr.length; j++)
                if (arr[j] < arr[minimumIndex]) minimumIndex = j;
            swap(arr, i, minimumIndex);
        }
        return arr;
    },
};

export { selectionSort };
