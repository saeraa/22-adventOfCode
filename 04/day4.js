const { readFileSync } = require("fs");

function syncReadFile(filename) {
	let fullyContainsCount = 0;
	let overlapCount = 0;

	const contents = readFileSync(filename, "utf-8");
	const arr = contents.split(/\n/);
	const newArr = arr.map((entry) => entry.split(","));

	newArr.forEach((pair) => {
		let leftRangeStart;
		let leftRangeEnd;
		let rightRangeStart;
		let rightRangeEnd;

		for (let i = 0; i < pair.length; i += 2) {
			[leftRangeStart, leftRangeEnd] = pair[i]
				.split("-")
				.map((n) => Number.parseInt(n));
			[rightRangeStart, rightRangeEnd] = pair[i + 1]
				.split("-")
				.map((n) => Number.parseInt(n));
			if (
				(leftRangeStart <= rightRangeStart && leftRangeEnd >= rightRangeEnd) ||
				(rightRangeStart <= leftRangeStart && rightRangeEnd >= leftRangeEnd)
			) {
				fullyContainsCount++;
			}
		}
	});

	newArr.forEach((pair) => {
		let leftRangeStart;
		let leftRangeEnd;
		let rightRangeStart;
		let rightRangeEnd;

		for (let i = 0; i < pair.length; i += 2) {
			[leftRangeStart, leftRangeEnd] = pair[i]
				.split("-")
				.map((n) => Number.parseInt(n));
			[rightRangeStart, rightRangeEnd] = pair[i + 1]
				.split("-")
				.map((n) => Number.parseInt(n));

			for (let j = rightRangeStart; j < rightRangeEnd + 1; j++) {
				if (j >= leftRangeStart && j <= leftRangeEnd) {
					overlapCount++;
					break;
				}
			}
		}
	});
	return { fullyContainsCount, overlapCount };
}

console.log(syncReadFile("./input.txt"));
