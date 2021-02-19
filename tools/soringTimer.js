const sortTimer = (arr, method, special = undefined) => {
    const copy = [...arr];
    let sorted;

    let startTime = Date.now();
    if (!special) sorted = method.sort(copy);
    else sorted = method.sort(copy, special);
    const unsortedTime = Date.now() - startTime;

    startTime = Date.now();
    // if (!special) sorted = method.sort(sorted);
    // else sorted = method.sort(sorted, special);
    const sortedTime = Date.now() - startTime;

    Message(special, method, arr, sorted, unsortedTime, sortedTime);
};

const Message = (special, method, arr, sorted, unsortedTime, sortedTime) => {
    const methodInfo =
        special && special.method && special.method.name
            ? method.name + " ( special: " + special.method.name + " )"
            : method.name;

    console.log(
        `
        method: ${methodInfo}
        array length: ${arr.length}
        Unsorted array sort time in ms: ${unsortedTime}
        Sorted array sort time in ms: ${sortedTime}
        old: ${arr.slice(0, 5)} ... ${arr.slice(arr.length - 5, arr.length)}
        sorted: ${sorted.slice(0, 5)} ... ${sorted.slice(
            sorted.length - 5,
            sorted.length
        )}
    
        `
    );
};

export { sortTimer };
