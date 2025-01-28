function sort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];

                // const temp = array[j + 1];
                // array[j + 1] = array[j];
                // array[j] = temp;
            }
        }
    }
    console.log(array);
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
sort(fruits);