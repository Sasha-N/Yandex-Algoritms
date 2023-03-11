const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
    inputData = data.toString().split("\n");


    let result = '';
    let heap = [null];

    for (let i = 1; i < inputData.length; i++) {
        let a;

        if (inputData[i][0] == "1") {
            result = result + remove() + '\n';
        }

        if (inputData[i][0] == "0") {
            a = Number(inputData[i].substring(inputData[i].indexOf(' ') + 1).trim());
            insert(a);
        }
    }

    function insert(node) {
        heap.push(node)

        if (heap.length > 1) {
            let current = heap.length - 1;

            while (current > 1 && heap[Math.floor(current / 2)] < heap[current]) {
                [heap[Math.floor(current / 2)], heap[current]] = [heap[current], heap[Math.floor(current / 2)]];
                current = Math.floor(current / 2)
            }
        }
    }

    function remove() {
        let bigest = heap[1];

        if (heap.length > 2) {
            heap[1] = heap[heap.length - 1]
            heap.splice(heap.length - 1)

            if (heap.length === 3) {
                if (heap[1] < heap[2]) {
                    [heap[1], heap[2]] = [heap[2], heap[1]];
                }
                return bigest;
            }

            let current = 1;
            let leftChildIndex = current * 2;
            let rightChildIndex = current * 2 + 1;

            while (heap[leftChildIndex] &&
                heap[rightChildIndex] &&
                (heap[current] < heap[leftChildIndex] ||
                    heap[current] < heap[rightChildIndex])) {
                if (heap[leftChildIndex] > heap[rightChildIndex]) {
                    [heap[current], heap[leftChildIndex]] = [heap[leftChildIndex], heap[current]];
                    current = leftChildIndex;
                } else {
                    [heap[current], heap[rightChildIndex]] = [heap[rightChildIndex], heap[current]];
                    current = rightChildIndex;
                }

                leftChildIndex = current * 2;
                rightChildIndex = current * 2 + 1;
            }
        }

        else if (heap.length === 2) {
            heap.splice(1, 1)
        } else {
            return null
        }

        return bigest;
    }

    fs.writeFile("output.txt", result += '\n', (err) => { })
});