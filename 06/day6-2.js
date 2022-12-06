const syncReadFile = require("../utils/syncReadFile.js");

function processFile(filename) {
	let result;
	const initialArr = syncReadFile(filename);

	for (let i = 0; i < initialArr[0].length; i++) {
		let substring = initialArr[0].substring(i, i + 14);

		let testSet = new Set();
		for (let j = 0; j < substring.length; j++) {
			testSet.add(substring[j]);
		}
		if (testSet.size == 14) {
			result = i + 14;
			break;
		}
	}
	return result;
}

console.log(processFile("./input.txt"));
