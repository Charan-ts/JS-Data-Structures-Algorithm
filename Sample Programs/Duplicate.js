function duplicate(...args) {

    // Solution One
    // let obj = {};
    // for (let i = 0; i < args.length; i++) {
    //     obj[args[i]] ? obj[args[i]] += 1 : obj[args[i]] = 1
    // }

    // for (const key in obj) {
    //     if (obj[key] > 1) {
    //         return true;
    //     }
    // }

    // return false;

    // Solution Two
    return new Set(args).size !== args.length;

}

const isDuplicatePresent = duplicate(1, 2, 3);
console.log(isDuplicatePresent);
