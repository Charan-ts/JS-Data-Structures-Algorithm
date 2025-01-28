function maxSubarraySum(array, n) {
    if (array.length < n) {
        return null;
    }

    let tempSum = 0;
    let maxSum = 0;
    for (let i = 0; i < n; i++) {
        const element = array[i];
        maxSum += element;
    }
    tempSum = maxSum;
    for (let i = n; i < array.length; i++) {
        tempSum = tempSum - array[i - n] + array[i];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)) // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4))  // 39 
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)) // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)) // 5
console.log(maxSubarraySum([2, 3], 3)) // null