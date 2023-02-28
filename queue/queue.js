const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
inputData = data.toString().split("\n");

let queue = [];
let result = '';


for (let i=0; i < inputData.length; i++) {
    let a;
    if (inputData[i].includes('push')) {
        a = Number(inputData[i].substring(inputData[i].indexOf(' ') + 1));
        queue.push(a);
        result = result + 'ok' +'\n';
    }

    if (inputData[i].includes('pop')) {
        if (queue[0] == undefined) {
            result = result + 'error' +'\n'
        } else {
            result = result + queue.shift() +'\n';
        }
    }

    if (inputData[i].includes('front')) {
        if (queue[0] == undefined) {
            result = result + 'error' +'\n'
        } else {
            result = result + queue[0] +'\n';  
        }
    }

    if (inputData[i].includes('size')) {
        result = result + (queue.length).toString() +'\n';
    }

    if (inputData[i].includes('clear')) {
        queue = [];
        result = result + 'ok' +'\n';
    }

    if (inputData[i].includes('exit')) {
        queue = [];
        result = result + 'bye' +'\n';
        break;
    }

}

fs.writeFile("output.txt", result += '\n', (err) => {})

});