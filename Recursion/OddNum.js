const collectOddNum = (num, arr) => {
    if (num === 0) return arr;
    if (num % 2 !== 0) arr.push(num);
    return collectOddNum(num - 1, arr);
}

console.log(collectOddNum(5, []));