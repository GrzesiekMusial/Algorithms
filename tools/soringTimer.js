const sortTimer = (arr, method) => {
    const copy = [...arr];
    let startTime = Date.now();
    let sorted = method.sort(copy);
    const unsortedTime = Date.now() - startTime;

    startTime = Date.now();
    sorted = method.sort(sorted);
    const sortedTime = Date.now() - startTime;

    console.log(
        `
        method name: ${method.name}
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
