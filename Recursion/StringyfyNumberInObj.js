function stringifyNumbers(obj) {
    if (obj === undefined) return 0;

    for (const key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] = obj[key].toString();
        }
        if (typeof obj[key] === 'object') {
            obj[key] = stringifyNumbers(obj[key])
        }
    }
    return obj;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));
// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }