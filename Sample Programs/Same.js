const same = (arr, sqrArr) => {
    if (arr.length !== sqrArr.length) {
        return false;
    }

    // My Solution
    /*
        for (let i = 0; i < arr.length; i++) {
            const ele = arr[i] ** 2;
            if (sqrArr.includes(ele)) {
                const index = sqrArr.indexOf(ele);
                sqrArr.splice(index, 1);
                continue;
            } else { return false };
        }
        return true;
    */

    // Their Solution
    /*
        for (let i = 0; i < arr.length; i++) {
            const currentIndex = sqrArr.indexOf(arr[i] ** 2);
            if (currentIndex === -1) {
                return false;
            }
            sqrArr.splice(currentIndex, 1);
        }
        return true;
    */

    // Both the above code have nested loops like indexof and normal loop above code will be O(n^2)
    // Below code have O(n)
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for (let val of sqrArr) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

const isFrequencySame = same([1, 2, 3], [4, 1, 9]);
console.log(isFrequencySame);


function sameFrequencyNumber(number1, number2) {
    // for (let i = 0; i < number1.length; i++) {
    //     const currentIndex = sqrArr.indexOf(arr[i] ** 2);
    //     if (currentIndex === -1) {
    //         return false;
    //     }
    //     sqrArr.splice(currentIndex, 1);
    // }
    // return true;
    const str1 = number1.toString();
    const str2 = number2.toString();

    if (str1.length !== str2.length) {
        return false;
    }

    const splittedArray = [];
    for (let i = 0; i < str2.length; i++) {
        splittedArray.push(str2[i]);
    }

    for (let i = 0; i < str1.length; i++) {
        const ele = str1[i];
        const currentIndex = splittedArray.indexOf(ele);
        if (currentIndex === -1) {
            return false;
        }
        splittedArray.splice(currentIndex, 1);
    }
    return true;
}

const isSame = sameFrequencyNumber(123, 324);
console.log(isSame);