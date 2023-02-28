const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
inputData = data.toString().split("\n");

let dequeue = [];
let result = '';


for (let i=0; i < inputData.length; i++) {
    let a;
    if (inputData[i].includes('push_back')) {
        a = Number(inputData[i].substring(inputData[i].indexOf(' ') + 1));
        dequeue.push(a);
        result = result + 'ok' +'\n';
    }

    if (inputData[i].includes('pop_front')) {
        if (dequeue[0] == undefined) {
            result = result + 'error' +'\n'
        } else {
            result = result + dequeue.shift() +'\n';
        }
    }

    if (inputData[i].includes('push_front')) {
        a = Number(inputData[i].substring(inputData[i].indexOf(' ') + 1));
        dequeue.unshift(a);
        result = result + 'ok' +'\n';
    }

    if (inputData[i].includes('pop_back')) {
        if (dequeue[dequeue.length-1] == undefined) {
            result = result + 'error' +'\n'
        } else {
            result = result + dequeue.pop() +'\n';
        }
    }

    if (inputData[i].includes('back') && !inputData[i].includes('push_back') && !inputData[i].includes('pop_back')) {
        if (dequeue[dequeue.length-1] == undefined) {
            result = result + 'error' +'\n'
        } else {
            result = result + dequeue[dequeue.length-1] +'\n';  
        }
    }

    if (inputData[i].includes('front') && !inputData[i].includes('pop_front') && !inputData[i].includes('push_front')) {
        if (dequeue[0] == undefined) {
            result = result + 'error' +'\n'
        } else {
            result = result + dequeue[0] +'\n';  
        }
    }

    if (inputData[i].includes('size')) {
        result = result + (dequeue.length).toString() +'\n';
    }

    if (inputData[i].includes('clear')) {
        dequeue = [];
        result = result + 'ok' +'\n';
    }

    if (inputData[i].includes('exit')) {
        dequeue = [];
        result = result + 'bye' +'\n';
        break;
    }

}

fs.writeFile("output.txt", result += '\n', (err) => {})

});