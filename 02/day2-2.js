const { readFileSync } = require("fs");
// X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck!"

// The total score is still calculated in the same way, but now you need to figure out what shape to choose so the round ends as indicated. The example above now goes like this:

// In the first round, your opponent will choose Rock (A), and you need the round to end in a draw (Y), so you also choose Rock. This gives you a score of 1 + 3 = 4.
// In the second round, your opponent will choose Paper (B), and you choose Rock so you lose (X) with a score of 1 + 0 = 1.
// In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = 7.
// Now that you're correctly decrypting the ultra top secret strategy guide, you would get a total score of 12.

// (1 for Rock, 2 for Paper, and 3 for Scissors)
// (0 if you lost, 3 if the round was a draw, and 6 if you won)

/* 

för scissor:
X = lose    paper
Y = draw    scissor
Z = win     

if [0] == A //*rock
  [1] == X +0+3 // 3  
  [1] == Y +3+1 // 4
  [1] == Z +6+2 // 8
if [0] == B //*paper
  [1] == X +0+1 // 1
  [1] == Y +3+2  // 5
  [1] == Z +6+3 // 9
if [0] == C //*scissor
  [1] == X +0+2 // 2
  [1] == Y +3+3   // 6
  [1] == Z +6+1 // 7

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
