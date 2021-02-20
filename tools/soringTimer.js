const sortTimer = (arr, method, special = undefined) => {
    const unsortedCheck = sort(arr, method, special);
    const sortedCheck = sort(unsortedCheck.sortedArray, method, special);

    getMessage(special, method, arr, unsortedCheck, sortedCheck);
};

const sort = (arr, method, special) => {
    const copy = [...arr];
    let measuredTime;
    let sorted;
    const startTime = Date.now();

    try {
        if (!special) sorted = method.sort(copy);
        else sorted = method.sort(copy, special);
        measuredTime = Date.now() - startTime;
    } catch (ex) {
        sorted = [];
        measuredTime = ex;
    }

    return { time: measuredTime, sortedArray: sorted };
};

const getMessage = (special, method, arr, unsortedCheck, sortedCheck) => {
    const methodInfo =
        special && special.method && special.method.name
            ? method.name + " ( special: " + special.method.name + " )"
            : method.name;

    console.log(
        `
        method: ${methodInfo}
        array length: ${arr.length}
        Unsorted array sort time in ms: ${unsortedCheck.time}
        Sorted array sort time in ms: ${sortedCheck.time}
        old: ${arr.slice(0, 5)} ... ${arr.slice(arr.length - 5, arr.length)}
        sorted: ${unsortedCheck.sortedArray.slice(
            0,
            5
        )} ... ${unsortedCheck.sortedArray.slice(
            unsortedCheck.sortedArray.length - 5,
            unsortedCheck.sortedArray.length
        )}
    
        `
    );
};

export { sortTimer };
