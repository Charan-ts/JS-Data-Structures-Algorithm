function capitalizeFirst(array) {
    // if (array.length === 0) return [];
    // let newArray = [];
    // let element = array.shift();
    // let subStr = element.slice(1);
    // let modifiedString = element.slice(0, 1).toUpperCase() + subStr;
    // newArray.push(modifiedString);
    // newArray = newArray.concat(capitalizeFirst(array))
    // return newArray;

    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
    res.push(string);
    return res;
}

capitalizeFirst(['car', 'taco', 'banana']); // ['Car','Taco','Banana']
