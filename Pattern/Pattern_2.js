function pattern(row) {
    let str = '';
    for (let i = 0; i <= row; i++) {
        for (let j = 0; j < i; j++) {
            str += '*';
        }
        str += "\n";
    }
    console.log(str);
}

pattern(5);

// *
// **
// ***
// ****
// *****

function pattern_(row) {
    let str = '';
    for (let i = 0; i <= row; i++) {
        for (let j = 0; j < row - i; j++) {
            str += ' ';
        }
        for (let k = 0; k < i; k++) {
            str += '*';
        }
        str += "\n";
    }
    console.log(str);
}

pattern_(5);

//     *
//    **
//   ***
//  ****
// *****
