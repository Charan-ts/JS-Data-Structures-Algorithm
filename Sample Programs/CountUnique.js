function countUnique(arr) {
    // const uniqValues = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (!uniqValues.includes(arr[i])) {
    //         uniqValues.push(arr[i]);
    //     }
    // }
    // return uniqValues.length;

    // const uniqValues = {};
    // for (let i = 0; i < arr.length; i++) {
    //     const ele = arr[i];
    //     uniqValues[ele] ? uniqValues[ele] += 1 : uniqValues[ele] = 1
    // }
    // return Object.keys(uniqValues).length;

    // Their solution
    if (!arr || arr.length === 0) {
        return 0;
    }

    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;

}

// const uniqValues = countUnique([1, 1, 2, 3, 3, 4, 4]);
// console.log(uniqValues);


function findUniqueElement(arr) {
    let uniqueElement = 0;
    for (let num of arr) {
        uniqueElement ^= num;
    }
    return uniqueElement;
}

// Example usage:
const arr = [2, 3, 4, 1, 2, 4, 3, 1, 6];
const unique = findUniqueElement(arr);
console.log("The unique element in the array is:", unique);