const jumpSearch = {
    name: "Jump Search",
    search: (arr, search) => {
        try {
            const blockSize = Math.floor(Math.sqrt(arr.length));
            let block = blockSize;
            while (arr[block] < search) block += blockSize;
            block -= blockSize;

            while (arr[block] !== search || arr[block] === undefined) block++;
            if (arr[block] === search) return arr[block];
            else return -1;
        } catch (ex) {
            return ex;
        }
    },
};

export { jumpSearch };
