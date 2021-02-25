import { binarySearch } from "./binary.js";

const exponentionalSearch = {
    name: "Exponentional Search",
    search: (arr, search) => {
        try {
            let bound = 1;
            while (arr[bound] < search) bound *= 2;
            return binarySearch.search(
                arr.slice(Math.floor(bound / 2), bound),
                search
            );
        } catch (ex) {
            return ex;
        }
    },
};

export { exponentionalSearch };
