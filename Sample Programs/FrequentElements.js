function topKFrequent(nums, k) {
    const freqMap = {};
    for (const num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }
    const freqPairs = Object.entries(freqMap);
    freqPairs.sort((a, b) => b[1] - a[1]);
    const result = freqPairs.slice(0, k);
    return result.map(pair => Number(pair[0]));
}

const nums = [1, 1, 1, 2, 2, 3], k = 2;
const pairs = topKFrequent(nums, k);
console.log(pairs);