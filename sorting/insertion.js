const insertionSort = {
    name: "Insertion Sort",
    sort: (arr) => {
        for (let i = 0; i < arr.length; i++) {
            const waiter = arr[i];
            for (let j = i; j >= 0; j--)
                if (j === 0 || arr[j - 1] < waiter) {
                    arr[j] = waiter;
                    break;
                } else arr[j] = arr[j - 1];
        }
        return arr;
    },
};

export { insertionSort };
