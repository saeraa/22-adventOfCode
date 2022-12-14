const syncReadFile = require("../utils/syncReadFile.js");

function processFile(filename) {
	const arr = syncReadFile(filename);
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
				let start = array[from].length - lineEntry;
				let end = array[from].length;
				const slicedPart = array[from].slice(start, end);
				array[from].length = array[from].length - lineEntry;

				slicedPart.forEach((entry) => {
					array[to].push(entry);
				});
			}
		});
	});

	let result = "";
	array.forEach((arrayInArray) => {
		result += arrayInArray[arrayInArray.length - 1];
	});

	return result;
}

console.log(processFile("./input.txt"));
