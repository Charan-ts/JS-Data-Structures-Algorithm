function averagePair(array, n) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        let res = (array[left] + array[right]) / 2;
        if (res === n) {
            return true;
        } else if (res < n) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}

// console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));

