function charCount(originalString) {
    const obj = {};
    if (!originalString) {
        return {};
    }
    originalString = originalString.toString();
    const cleanedString = originalString.replace(/[^\w\s]/g, '');

    for (let i = 0; i < cleanedString.length; i++) {
        let char = cleanedString[i];
        if (char !== ' ') {
            if (obj[char] !== undefined) {
                obj[char]++;
            } else {
                obj[char] = 1;
            }
        }
    }

    return obj;
}

console.log(charCount("My PIN Number is 12341!"));
console.log(charCount(""));
console.log(charCount(undefined));
console.log(charCount(1234122345));
console.log(charCount(null));