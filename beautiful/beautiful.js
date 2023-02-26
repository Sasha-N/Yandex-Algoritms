const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {

    [size, str] = data.toString().split("\n");

    let result = [];
    let tempSize;

    for (let i = 0; i < str.length - 1; i++) {
        let max = 1;
        tempSize = size;
        for (let j = i + 1; j < str.length - 1; j++) {
            if (str[i] !== str[j] && tempSize > 0) {
                max += 1;
                tempSize -= 1;
            }
            if (tempSize == 0 && str[i] == str[j]) {
                max += 1;
            }
        }
        result.push(max);
    }


    const answer = Math.max(...result);

    fs.writeFile("output.txt", answer.toString(), (err) => { })

});