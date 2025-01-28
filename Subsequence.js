function isSubsequence(sequence, str) {
    let ptr1 = 0;
    let ptr2 = 0;

    while (ptr1 < sequence.length && ptr2 < str.length) {
        if (sequence[ptr1] === str[ptr2]) {
            ptr1++;
        }
        ptr2++;
    }

    return ptr1 === sequence.length;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)