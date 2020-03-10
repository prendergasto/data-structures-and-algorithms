function map(array, func) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = func(array[i]);
    }

    return result;
}

function double(n) {
    return n * 2;
}

console.log(map([1, 2, 3, 4], double))

