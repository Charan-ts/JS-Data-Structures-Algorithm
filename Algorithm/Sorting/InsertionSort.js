function insertionSort(array) {
    // for (let i = 0; i < array.length; i++) {
    //     for (let j = i; j > 0; j--) {
    //         if (array[j] < array[j - 1]) {
    //             [array[j], array[j - 1]] = [array[j - 1], array[j]];
    //         }
    //     }
    // }
    // console.log(array);

    for (let i = 1; i < array.length; i++) {
        let currentVal = array[i];
        for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = currentVal;
        console.log(array);
    }
    console.log("Result", array);
}

// insertionSort([5, 4, 6, 3, 1, 2, 8, 7, 9]);
insertionSort([5, 4, 1, 2]);