const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {

    [size, str] = data.toString().split("\n");

    let dictionary = {};

    let l = 0;
    let r = 0;

    let maxCount = 0;

    for (r=0; r < str.length; r++) {
        dictionary[str[r]] = dictionary[str[r]] + 1 || 1;
        maxCount = Math.max(maxCount, dictionary[str[r]]);
        if (r-l+1-maxCount > size) {
            dictionary[str[l]]--;
            l++;
        }
    }

    fs.writeFile("output.txt", (r-l).toString(), (err) => { })

});