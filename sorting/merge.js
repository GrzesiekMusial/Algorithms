const mergeSort = {
    name: "Merge Sort",
    sort: (arr) => {
        const middle = parseInt(arr.length / 2);
        let left = arr.slice(-Math.infinity, middle);
        let right = arr.slice(middle, Math.infinity);

        if (left.length > 1) left = mergeSort.sort(left);
        if (right.length > 1) right = mergeSort.sort(right);

        return merge(left, right);
    },
};

const merge = (left, right) => {
    const arr = Array.from({ length: left.length + right.length });

    let rIndex = 0,
        lIndex = 0,
        aIndex = 0;

    while (rIndex < right.length && lIndex < left.length) {
        arr[aIndex++] =
            right[rIndex] > left[lIndex] ? left[lIndex++] : right[rIndex++];
    }

    while (lIndex < left.length) {
        arr[aIndex++] = left[lIndex++];
    }
    while (rIndex < right.length) {
        arr[aIndex++] = right[rIndex++];
    }

    return arr;
};

export { mergeSort };
