const sortTimeCheck = (arr, method) => {
    const copy = [...arr];
    const startTime = Date.now();
    const sorted = method.sort(copy);
    const time = Date.now() - startTime;

    console.log(
        "\n",
        "old: ",
        arr,
        "\n",
        "sorted: ",
        sorted,
        "\n",
        "method name: ",
        method.name,
        "\n",
        "sort time in ms: ",
        time
    );
};

export { sortTimeCheck };
