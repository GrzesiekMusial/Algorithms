const ternarySearch = {
    name: "Ternary Search",
    search: (arr, search, left = 0, right = arr.length - 1) => {
        try {
            const partition = Math.floor((right - left) / 3);

            const mid1 = left + partition;
            const mid2 = right - partition;

            if (arr[mid1] === search) return arr[mid1];
            else if (arr[mid2] === search) return arr[mid2];
            else if (arr[mid1] > search)
                return ternarySearch.search(arr, search, left, mid1 - 1);
            else if (arr[mid1] < search && arr[mid2] > search)
                return ternarySearch.search(arr, search, mid1 + 1, mid2 - 1);
            else return ternarySearch.search(arr, search, mid2 + 1, right);
        } catch (ex) {
            return ex;
        }
    },
};

export { ternarySearch };
