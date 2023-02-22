const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {

inputData = data.toString().split("/n").join("").split("");

const dictionary = inputData.reduce((acc, i) => {
	if (acc.hasOwnProperty(i)) {
		acc[i] += 1;
	} else {
		acc[i] = 1;
	}
	return acc;
}, {});

let position = Object.keys(dictionary).sort((a,b) => a.charCodeAt(0)-b.charCodeAt(0));

const frequently = Object.values(dictionary);

let height = frequently[0];
for (let i=0; i < frequently.length - 1; i++) {
	if (height < frequently[i]) {
		height = frequently[i];
    
	}
}

let result = '';
for (let i = height; i > 0; i--) {
	let row = '';
	for (let j = 0; j < position.length - 1; j++) {
		if (i > dictionary[position[j]]) {
			row += '/n';
		} else {
			row += '#';
		}
	}
  
	row += '\n';
	result += row;
}

result += position.join('');

fs.writeFile("output.txt", result, (err) => {})

});