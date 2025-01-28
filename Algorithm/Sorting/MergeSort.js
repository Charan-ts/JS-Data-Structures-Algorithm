// function mergeArray(arr1, arr2) {
//     let i = 0, j = 0;
//     const newArray = [];
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             newArray.push(arr1[i]); i++;
//         }
//         else {
//             newArray.push(arr2[j]); j++;
//         }
//     }

//     while (i < arr1.length) {
//         newArray.push(arr1[i]); i++;
//     }

//     while (j < arr2.length) {
//         newArray.push(arr2[j]); j++;
//     }
//     console.log(newArray);
//     return newArray;
// }

// function mergeSort(array) {
//     if (array.length <= 1) return array;
//     let mid = Math.floor(array.length / 2);
//     let leftArr = mergeSort(array.slice(0, mid));
//     let rightArr = mergeSort(array.slice(mid));
//     // console.log("Left", leftArr);
//     // console.log("Right", rightArr);
//     return mergeArray(leftArr, rightArr);
// }


function mergeArray(arr1, arr2) {
    let i = 0, j = 0;
    const result = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

const mergeSort = (array) => {
    if (array.length === 1) return array;
    const mid = Math.floor(array.length / 2);
    const leftArr = mergeSort(array.slice(0, mid));
    const rightArr = mergeSort(array.slice(mid));
    return mergeArray(leftArr, rightArr);
}

const mergedArray = mergeSort([1, 5, 2, 4, 6, -1, 10, 19, 11, 35]);
console.log(mergedArray);