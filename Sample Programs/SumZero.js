function sumZero(firstArr) {
    if (!firstArr || firstArr.length === 0) {
        return undefined
    }

    // for (let i = 0; i < firstArr.length; i++) {
    //     for (let j = i + 1; j < firstArr.length; j++) {
    //         if (firstArr[i] + firstArr[j] === 0) {
    //             return [firstArr[i], firstArr[j]]
    //         }
    //     }
    // }

    const left = 0;
    const right = firstArr.length - 1;
    while (left < right) {
        let sum = firstArr[left] + firstArr[right];
        if (sum === 0) {
            return [firstArr[left], firstArr[right]]
        } else if (sum > 0) {
            right--
        } else {
            left++;
        }
    }
}

const pair = sumZero([-3, -2, -1, 0, 1, 2, 3])
console.log(pair);