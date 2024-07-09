const INPUT_PATH = "../inputs/스티커.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const T = Number(inputArguments[0]);
  const result = [];
  let line = 1;

  for (let t = 0; t < T; t++) {
    const n = Number(inputArguments[line++]);
    const stickers = [
        inputArguments[line++].split(" ").map(Number),
        inputArguments[line++].split(" ").map(Number)
    ];
  }

  return result.join('\n');
}

console.log(solution(input));
