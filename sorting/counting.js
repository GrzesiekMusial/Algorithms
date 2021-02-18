const countingSort = {
    name: "Counting Sort",
    sort: (arr) => {
        const count = Array.from({ length: arr.length + 1 }, () => 0);
        const result = [];

        for (let i = 0; i < arr.length; i++) count[arr[i]]++;

        for (let i = 0; i < count.length; i++) {
            let items = count[i];
            while (items-- > 0) result.push(i);
        }

        return result;
    },
};

export { countingSort };
