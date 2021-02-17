const swap = async (arr, itemIndex, swapIndex) => {
    const waiter = arr[itemIndex];
    arr[itemIndex] = arr[swapIndex];
    arr[swapIndex] = waiter;
    return;
};

export { swap };
