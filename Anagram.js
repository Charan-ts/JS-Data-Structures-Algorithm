function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const strChanged1 = str1.toLowerCase();
    const strChanged2 = str2.toLowerCase();

    // My Solution
    /*
    const strSeparated2 = [];
    for (let i = 0; i < strChanged2.length; i++) {
        strSeparated2.push(strChanged2.charAt(i));
    }

    for (let i = 0; i < strChanged1.length; i++) {
        const currentIndex = strSeparated2.indexOf(strChanged1.charAt(i));
        if (currentIndex === -1) {
            return false;
        }
        strSeparated2.splice(currentIndex, 1);
    }

    return true;
    */

    let lookUp = {};
    for (let i = 0; i < strChanged1.length; i++) {
        const letter = strChanged1[i];
        lookUp[letter] ? lookUp[letter] += 1 : lookUp[letter] = 1;
    }
    console.log(lookUp)

    for (let i = 0; i < strChanged2.length; i++) {
        const letter = strChanged2[i];
        if (!lookUp[letter]) {
            return false;
        } else {
            lookUp[letter] -= 1
        }
    }

    return true

}

const isValid = validAnagram('Cinema', 'IceMan');
console.log(isValid);