const groupAnagram = (strArray) => {
    const grouped = {};
    for (const str of strArray) {
        const sorted = str.split('').sort().join('');
        if (grouped[sorted]) {
            grouped[sorted].push(str)
        } else {
            grouped[sorted] = [str]
        }
    }
    return Object.values(grouped)
}


strs = [""]   // [["bat"],["nat","tan"],["ate","eat","tea"]]
const groups = groupAnagram(strs);
console.log(groups);