function bubbleSort(array) {
    // for (let i = 0; i < array.length; i++) {
    //     for (let j = 0; j < array.length; j++) {
    //         if (array[j] > array[j + 1]) {
    //             [array[j], array[j + 1]] = [array[j + 1], array[j]]
    //         }
    //     }
    // }

    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            // console.log(array[j], array[j + 1]);
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
            // console.log(array);
        }
        // console.log("First Interval Passed");
    }
    console.log(array);
}

bubbleSort([5, 4, 6, 3, 1, 2, -1, 8, 7, 9]);