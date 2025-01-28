function pattern(row) {
    let str = "";
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < row - i; j++) {
            str += '*'
        }
        str += "\n";
    }
    console.log(str);
}

pattern(5)

// *****
// ****
// ***
// **
// *