const binarySearch = {
    name: "Binary Search",
    search: (arr, search) => {
        try {
            let low = 0;
            let high = arr.length - 1;

            while (low <= high) {
                let middleIndex = Math.floor((low + high) / 2);

                if (arr[middleIndex] === search) return arr[middleIndex];

                if (arr[middleIndex] < search) low = middleIndex + 1;
                if (arr[middleIndex] > search) high = middleIndex - 1;
            }

            return -1;
        } catch (ex) {
            return ex;
        }
    },
};

export { binarySearch };
