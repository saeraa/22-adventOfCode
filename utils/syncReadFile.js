const { readFileSync } = require("fs");

module.exports = function syncReadFile(filename) {
	const contents = readFileSync(filename, "utf-8");
	const arr = contents.split(/\n/);
	return arr;
};
