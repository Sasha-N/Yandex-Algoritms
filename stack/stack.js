const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
inputData = data.toString().split("\n");

let stack = [];
let result = '';


for (let i=0; i < inputData.length; i++) {
    let a;
    if (inputData[i].includes('push')) {
        a = Number(inputData[i].substring(inputData[i].indexOf(' ') + 1));
        stack.push(a);
        result = result + 'ok' +'\n';
    }

    if (inputData[i].includes('pop')) {
        if (stack[stack.length-1] == undefined) {
            result = result + 'error' +'\n'
        } else {
            result = result + stack.pop() +'\n';
        }
    }

    if (inputData[i].includes('back')) {
        if (stack[stack.length-1] == undefined) {
            result = result + 'error' +'\n'
        } else {
            result = result + stack[stack.length-1] +'\n';  
        }
    }

    if (inputData[i].includes('size')) {
        result = result + (stack.length).toString() +'\n';
    }

    if (inputData[i].includes('clear')) {
        stack = [];
        result = result + 'ok' +'\n';
    }

    if (inputData[i].includes('exit')) {
        stack = [];
        result = result + 'bye' +'\n';
        break;
    }

}

fs.writeFile("output.txt", result += '\n', (err) => {})

});