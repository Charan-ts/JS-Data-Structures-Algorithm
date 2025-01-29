// function same(arr1, arr2) {
//     if (arr2.length < arr1.length) {
//         return false
//     }

//     const copiedArray = [...arr2];

//     for (let i = 0; i < arr1.length; i++) {
//         let val = arr1[i] ** 2;
//         for (let j = 0; j < copiedArray.length; j++) {
//             if (copiedArray[j] === val) {
//                 copiedArray.splice(j, 1);
//                 break;
//             }
//         }
//     }
//     return copiedArray.length === 0;
// }

function same(arr1, arr2) {
    if (arr2.length < arr1.length) {
        return false
    }

    for (let i = 0; i < arr1.length; i++) {
        let idx = arr2.indexOf(arr1[i] ** 2);
        if (idx === -1) {
            return false;
        }
        arr2.splice(idx, 1);
    }
    return arr2.length === 0;
}

const isSame = same([1, 2, 3], [4, 1, 9]);
console.log(isSame);