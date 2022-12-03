const alphabet = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	e: 5,
	f: 6,
	g: 7,
	h: 8,
	i: 9,
	j: 10,
	k: 11,
	l: 12,
	m: 13,
	n: 14,
	o: 15,
	p: 16,
	q: 17,
	r: 18,
	s: 19,
	t: 20,
	u: 21,
	v: 22,
	w: 23,
	x: 24,
	y: 25,
	z: 26,
	A: 27,
	B: 28,
	C: 29,
	D: 30,
	E: 31,
	F: 32,
	G: 33,
	H: 34,
	I: 35,
	J: 36,
	K: 37,
	L: 38,
	M: 39,
	N: 40,
	O: 41,
	P: 42,
	Q: 43,
	R: 44,
	S: 45,
	T: 46,
	U: 47,
	V: 48,
	W: 49,
	X: 50,
	Y: 51,
	Z: 52
};
const { readFileSync } = require("fs");

function syncReadFile(filename) {
	const arrayOfResults = [];

	const contents = readFileSync(filename, "utf-8");
	const arr = contents.split(/\n/);

	for (let i = 0; i < arr.length; i += 3) {
		for (let j in arr[i]) {
			if (arr[i + 1].includes(arr[i][j]) && arr[i + 2].includes(arr[i][j])) {
				arrayOfResults.push(arr[i][j]);
				break;
			}
		}
	}

	let result = 0;
	arrayOfResults.forEach((entry) => {
		result += alphabet[entry];
	});
	return result;
}

console.log(syncReadFile("./input.txt"));
