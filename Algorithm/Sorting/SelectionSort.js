function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j;
            }
        }
        if(minIndex !== i) {
            [array[minIndex], array[i]] = [array[i], array[minIndex]];
        }
    }
}

selectionSort([5, 4, 6, 3, 1, 2, 8, 7, 9]);
// selectionSort([5, 4, 1, 2]);