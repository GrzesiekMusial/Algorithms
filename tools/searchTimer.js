const searchTimer = (arr, method, value) => {
    let best = { time: +Infinity };
    let worst = { time: -Infinity };
    const first = search(arr, method, arr[0]);
    const middle = search(arr, method, arr[Math.floor(arr.length / 2)]);
    const last = search(arr, method, arr[arr.length - 1]);

    [first, middle, last].forEach((result) => {
        if (result.time < best.time) best = result;
        if (result.time > worst.time) worst = result;
    });

    getMessage(method, arr, { best: best, worst: worst });
};

const search = (arr, method, value) => {
    const copy = [...arr];

    let measuredTime;
    let searchResult;

    const startTime = Date.now();

    try {
        searchResult = method.search(copy, value);
        measuredTime = Date.now() - startTime;
    } catch (ex) {
        searchResult = -1;
        measuredTime = ex;
    }

    return { time: measuredTime, value: searchResult };
};

const getMessage = (method, arr, result) => {
    const methodInfo = method.name;

    console.log(
        `
        method: ${methodInfo}
        array length: ${arr.length}
        (Best) search time in ms: (val: ${result.best.value})  ${result.best.time} ms
        (worst) search time in ms: (val: ${result.worst.value})  ${result.worst.time} ms
        `
    );
};

export { searchTimer };
