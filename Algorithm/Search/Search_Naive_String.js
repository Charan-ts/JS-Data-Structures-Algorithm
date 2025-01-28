const searchString = (str, searchStr) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < searchStr.length; j++) {
            if (str[i + j] !== searchStr[j]) break;
            if (j === searchStr.length - 1) count++;
        }
    }
    return count;
}

const match = searchString("ho my god, he got the job, the job is cannot be a software engineer, they all got the jobs", "job");
console.log(match);