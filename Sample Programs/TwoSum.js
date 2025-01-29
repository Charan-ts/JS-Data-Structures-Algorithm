var twoSum = function (nums, target) {
    let i = 0;
    let j = 1;
    while (i < j) {
        if ((nums[i] + nums[j]) === target) return [i, j];
        else if (j === nums.length) {
            i++; j = i + 1;
        }
        else if (j < nums.length) j++;
    }
};

const sumIndex = twoSum([2,7,11,15], 9);
console.log(sumIndex);