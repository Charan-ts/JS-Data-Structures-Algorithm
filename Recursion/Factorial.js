// const fact = (num) => {
//     if (num === 0) return 1;
//     return num * fact(num - 1);
// }

// const factorial = fact(5);
// console.log(factorial);

function recursiveRange(num) {
    if (num === 0) return 0;
    return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6));