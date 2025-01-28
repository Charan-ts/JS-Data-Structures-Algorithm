function binarySearch(array, num) {
    if (array.length === 0) return -1;

    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (array[mid] === num) return mid;
        else if (num > array[mid]) start = mid + 1;
        else end = mid - 1;
    }
    return - 1;
}

function binaryRecursive(array, num, start, end) {
    if (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (num === array[mid]) return mid;
        else if (num > array[mid]) return binaryRecursive(array, num, mid + 1, end);
        else return binaryRecursive(array, num, start, mid - 1);
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)) // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)) // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)) // 2
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)) // 16
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)) // -1



console.log(binaryRecursive([1, 2, 3, 4, 5], 2, 0, 4)) // 1
console.log(binaryRecursive([1, 2, 3, 4, 5], 3, 0, 4)) // 2