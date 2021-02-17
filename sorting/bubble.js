import { swap } from "./swap.js";

const bubbleSort = {
    name: "Bubble Sort",
    sort: (arr) => {
        for (let i = 0; i < arr.length - 1; i++)
            for (let j = 1; j < arr.length - i; j++)
                if (arr[j] < arr[j - 1]) swap(arr, j, j - 1);

        return arr;
    },
};

export { bubbleSort };
