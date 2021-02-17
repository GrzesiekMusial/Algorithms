const generator = (number) => {
    const array = Array.from({ length: number }, () =>
        Math.floor(Math.random() * number)
    );
    console.log("generated array ", array);

    return array;
};

export { generator };
