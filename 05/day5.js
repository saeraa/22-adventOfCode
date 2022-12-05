const { readFileSync } = require("fs");

function syncReadFile(filename) {
	const contents = readFileSync(filename, "utf-8");
	const arr = contents.split(/\n/);
	let array = [];

	let longest = arr.reduce(function (a, b) {
		return a.length > b.length ? a : b;
	});
	let longestLineLength = longest.length;

	for (let i = 1; i < longestLineLength; i = i + 4) {
		let entry = [];
		arr.forEach((line) => {
			if (line.charAt(i).match(/[A-Z]/)) {
				entry.push(line.charAt(i));
			}
		});
		entry.length > 0 ? array.push(entry.reverse()) : null;
	}

	let instructions = [];
	arr.forEach((line) => {
		if (line.charAt(0).match(/[a-z]/)) {
			let array = line.split(" ");
			let lineArray = [];

			array.forEach((entry) => {
				if (+entry) {
					lineArray.push(+entry);
				}
			});
			instructions.push(lineArray);
		}
	});

	instructions.forEach((line) => {
		line.forEach((lineEntry, index) => {
			let from = line[1] - 1;
			let to = line[2] - 1;
			if (index === 0) {
				for (let i = 0; i < lineEntry; i++) {
					array[to].push(array[from].pop());
				}
			}
		});
	});

	let result = "";
	array.forEach((arrayInArray) => {
		result += arrayInArray[arrayInArray.length - 1];
	});

	return result;
}

console.log(syncReadFile("./input.txt"));
