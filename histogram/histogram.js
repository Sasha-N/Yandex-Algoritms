const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
inputData = data.toString().split("\n").join("").split(" ").join("").split("");

let height = 0;
const dictionary = inputData.reduce((acc, i) => {
	if (acc.hasOwnProperty(i)) {
		acc[i] += 1;

	} else {
		acc[i] = 1;
	}        
    if (height < acc[i]) {
        height = acc[i];
    }
	return acc;
}, {});

let position = Object.keys(dictionary).sort((a,b) => a.charCodeAt(0)-b.charCodeAt(0));

let result = '';
for (let i = height; i > 0; i--) {
	let row = '';
	for (let j = 0; j < position.length; j++) {
		if (i > dictionary[position[j]]) {
			row += ' ';
		} else {
			row += '#';
		}
	}
  
	row += '\n';
	result += row;
}

result += position.join('');

fs.writeFile("output.txt", result += '\n', (err) => {})

});