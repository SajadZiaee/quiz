//3

function flatten(arr) {
    const result = [];
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    });
    return result;
}

const test = [4, [[5], [6, [7], 8], 9, 10]];
console.log(flatten(test));