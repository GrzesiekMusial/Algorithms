const linearSearch = {
    name: "Linear Search",
    search: (arr, search) => {
        try {
            for (let i = 0; i < arr.length; i++)
                if (arr[i] === search) return arr[i];

            return -1;
        } catch (ex) {
            return ex;
        }
    },
};

export { linearSearch };
