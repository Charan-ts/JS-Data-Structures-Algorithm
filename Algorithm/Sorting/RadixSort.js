const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

const digitCount = (num) => {
    if (num === 0) return 1;
    // log10 is for 10 to what power gives the passed number
    // num = 2345 -> log10(num) -> 3.370... -> abs -> 3 -> 3 + 1 -> 4 
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = nums => {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

const radixSort = numbers => {
    const maxDigitCount = mostDigits(numbers);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => [])
        for (let i = 0; i < numbers.length; i++) {
            const digit = getDigit(numbers[i], k);
            digitBuckets[digit].push(numbers[i]);
        }
        numbers = [].concat(...digitBuckets);
    }
    return numbers;
}

console.log(radixSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));