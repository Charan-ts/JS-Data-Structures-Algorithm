function maxSubArray(array, n) {
    // let maxSum = 0;
    // let tempSum = 0;
    // if (array.length < n) return null;
    // for (let i = 0; i < n; i++) {
    //     maxSum += array[i];
    // }
    // tempSum = maxSum;
    // for (let i = n; i < array.length; i++) {
    //     tempSum = tempSum - array[i - n] + array[i];
    //     maxSum = Math.max(maxSum, tempSum);
    // }
    // return maxSum;

    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < n; i++) {
        maxSum += array[i];
    }
    tempSum = maxSum;
    for (let i = n; i < array.length; i++) {
        tempSum = tempSum - array[i - n] + array[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

// const subArray = maxSubArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
// console.log(subArray);

function averagePair(arr, num) {
    let start = 0
    let end = arr.length - 1;
    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2
        if (avg === num) return true;
        else if (avg < num) start++
        else end--
    }
    return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));

function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}

function isSubsequence(str1, str2) {
    if (str1.length === 0) return true
    if (str2.length === 0) return false
    if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
    return isSubsequence(str1, str2.slice(1))
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false 