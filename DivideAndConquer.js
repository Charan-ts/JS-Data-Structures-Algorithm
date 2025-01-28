function devideAndConquer(array, n) {
    let min = 0;
    let max = array.length - 1;
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentEle = array[middle];

        if (array[middle] < n) {
            min = middle + 1;
        } else if (array[middle] > n) {
            max = middle - 1
        } else {
            return middle;
        }
    }

    return -1;
}

const value = devideAndConquer([1, 2, 3, 4, 5, 6], 4);
console.log(value);

