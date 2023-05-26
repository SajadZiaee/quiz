//1


// DECLARATIVE: 
function declarative(arr, callback) {
    return arr.map(callback);
}
const nums = [1, 2, 3, 4, 5];
const doubleNumber = (num) => num * 2;
const newArr = declarative(nums, doubleNumber);

console.log('DECLARATIVE');
console.log(newArr);

// IMPERATIVE

function Imperative(arr, callback) {
    const _newArr = [];

    for (let i = 0; i < arr.length; i++) {
        const newItem = callback(arr[i]);
        _newArr.push(newItem);
    }

    return _newArr;
}


const newArr2 = Imperative(nums, doubleNumber);
console.log('IMPERATIVE');
console.log(newArr);