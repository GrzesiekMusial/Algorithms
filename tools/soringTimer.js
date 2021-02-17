const sortTimer = (arr, method) => {
    const copy = [...arr];
    const startTime = Date.now();
    const sorted = method.sort(copy);
    const time = Date.now() - startTime;

    console.log(
        `
        method name: ${method.name}
        array length: ${arr.length}
        sort time in ms: ${time}
        old: ${arr.slice(0, 5)} ... ${arr.slice(arr.length - 5, arr.length)}
        sorted: ${sorted.slice(0, 5)} ... ${sorted.slice(
            sorted.length - 5,
            sorted.length
        )}
    
        `
    );
};

export { sortTimer };
