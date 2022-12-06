const syncReadFile = require("../utils/syncReadFile.js");

function processFile(filename) {
	let result;
	const initialArr = syncReadFile(filename);
	let arr = initialArr[0].split("");

	for (let i = 0; i < arr.length; i++) {
		let one = arr[i];
		let two = arr[i + 1];
		let three = arr[i + 2];
		let four = arr[i + 3];
		if (
			one !== two &&
			one !== three &&
			one !== four &&
			two !== three &&
			two !== four &&
			three !== four
		) {
			result = i + 4;
			break;
		}
	}
	return result;
}

console.log(processFile("./input.txt"));
