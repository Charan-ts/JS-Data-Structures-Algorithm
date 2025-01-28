function pattern(n) {
    let string = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            string += " ";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            string += "*";
        }
        string += '\n';
    }
    console.log(string)
}

// pattern(5);

//     *
//    ***
//   *****
//  *******
// *********

function pattern_(n) {
    let string = '';
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            string += " ";
        }
        for (let k = 0; k < 2 * (n - i) - 1; k++) {
            string += "*";
        }
        string += '\n';
    }
    console.log(string)
}

// pattern_(5);
// *********
//  *******
//   *****
//    ***
//     *

function _pattern_(n) {
    let string = '';
    for (let i = 1; i <= n; i++) {
        // printing spaces
        for (let j = 1; j <= n - i; j++) {
            string += " ";
        }
        // printing star
        for (let k = 0; k < 2 * i - 1; k++) {
            if (i === 1 || i === n) {
                string += "*";
            }
            else {
                if (k === 0 || k === 2 * i - 2) {
                    string += "*";
                }
                else {
                    string += " ";
                }
            }
        }
        string += "\n";
    }
    console.log(string)
}

_pattern_(5);

//     *
//    * *
//   *   *
//  *     *
// *********