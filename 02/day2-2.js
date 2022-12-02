const { readFileSync } = require("fs");

function syncReadFile(filename) {
	const contents = readFileSync(filename, "utf-8");
	const arr = contents.split(/\n/).map((entry) => entry.split(" "));

	let opponentScore = 0;
	let playerScore = 0;

	arr.forEach((round) => {
		switch (round[0]) {
			case "A":
				if (round[1] == "X") {
					playerScore += 3;
					break;
				} else if (round[1] == "Y") {
					playerScore += 4;
					break;
				} else {
					playerScore += 8;
					break;
				}
			case "B":
				if (round[1] == "X") {
					playerScore += 1;
					break;
				} else if (round[1] == "Y") {
					playerScore += 5;
					break;
				} else {
					playerScore += 9;
					break;
				}
			case "C":
				if (round[1] == "X") {
					playerScore += 2;
					break;
				} else if (round[1] == "Y") {
					playerScore += 6;
					break;
				} else {
					playerScore += 7;
					break;
				}
		}
	});

	return playerScore;
}

console.log(syncReadFile("./input.txt"));
