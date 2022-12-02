const { readFileSync } = require("fs");

// (1 for Rock, 2 for Paper, and 3 for Scissors)
// (0 if you lost, 3 if the round was a draw, and 6 if you won)

/* In the first round, your opponent will choose Rock (A), and you should choose Paper (Y). This ends in a win for you with a score of 8 (2 because you chose Paper + 6 because you won).
In the second round, your opponent will choose Paper (B), and you should choose Rock (X). This ends in a loss for you with a score of 1 (1 + 0).
The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = 6.
In this example, if you were to follow the strategy guide, you would get a total score of 15 (8 + 1 + 6). 

x = rock
y = paper
z = scissor

*/

/* 
if [0] == A //*rock
  [1] == X +4
  [1] == Y +8
  [1] == Z +3
if [0] == B //*paper
  [1] == X +1+0   //1
  [1] == Y +2+3   // 5
  [1] == Z +3+6   // 9
if [0] == C //*scissor
  [1] == X +1+6 // 7
  [1] == Y +2+0 // 2
  [1] == Z +3+3 // 6

*/

function syncReadFile(filename) {
	const contents = readFileSync(filename, "utf-8");
	const arr = contents.split(/\n/).map((entry) => entry.split(" "));

	let opponentScore = 0;
	let playerScore = 0;

	arr.forEach((round) => {
		switch (round[0]) {
			case "A":
				if (round[1] == "X") {
					playerScore += 4;
					break;
				} else if (round[1] == "Y") {
					playerScore += 8;
					break;
				} else {
					playerScore += 3;
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
					playerScore += 7;
					break;
				} else if (round[1] == "Y") {
					playerScore += 2;
					break;
				} else {
					playerScore += 6;
					break;
				}
		}
	});

	return playerScore;
}

console.log(syncReadFile("./input.txt"));
