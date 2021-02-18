const bucketSort = {
    name: "Bucket Sort",
    sort: (arr, options) => {
        const buckets = options.buckets;
        const sortMethod = options.method;
        const bucketsArray = Array.from(Array(buckets), () => new Array());
        const result = [];
        const bucketHeight = arr.length / buckets;

        for (let i = 0; i < arr.length; i++)
            bucketAllocate(arr[i], bucketsArray, bucketHeight);

        bucketsArray.forEach((element) => {
            sortMethod.sort(element);
            element.forEach((el) => result.push(el));
        });

        return result;
    },
};

const bucketAllocate = (value, buckets, bucketHeight) => {
    for (let i = 1; i <= buckets.length; i++)
        if (i * bucketHeight >= value) return buckets[i - 1].push(value);
};

export { bucketSort };
