const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {

    [firstGamer, secondGamer] = data.toString().split("\n");

    let stack1 = firstGamer.trim().split(" ").map(Number);
    let stack2 = secondGamer.trim().split(" ").map(Number);

    i = 0;
    let result = '';

    while (i < 1000000 && stack1.length != 0 && stack2.length != 0) {
        let a = stack1[0];
        let b = stack2[0];

        if (a > b) {
            if (a == 9 && b == 0) {
                stack2.push(a);
                stack2.push(b);
            } else {
                stack1.push(a);
                stack1.push(b);
            }
        } else {
            if (a == 0 && b == 9) {
                stack1.push(a);
                stack1.push(b);
            } else {
                stack2.push(a);
                stack2.push(b);
            }
        }

        stack1.shift();
        stack2.shift();
        i++;
    }

    if (stack2.length == 0) result = "first" + " " + i;

    if (stack1.length == 0) result = "second" + " " + i;

    if (i >= 1000000) result = "botva";


    fs.writeFile("output.txt", result += '\n', (err) => { })

});