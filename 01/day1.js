const { readFileSync } = require("fs");

function syncReadFile(filename) {
	const contents = readFileSync(filename, "utf-8");
	const arr = contents.split(/\n/);

	let resultArray = [];
	let temp = 0;

	arr.forEach((item) => {
		if (item.length > 1) {
			temp += +item;
		} else {
			resultArray.push(temp);
			temp = 0;
		}
	});
	resultArray.sort((a, b) => b - a);

	return {
		"highest number": resultArray[0],
		"total of highest 3": resultArray.slice(0, 3).reduce((a, b) => a + b, 0)
	};
}

console.log(syncReadFile("./input.txt"));
