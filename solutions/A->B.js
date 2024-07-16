const INPUT_PstartTH = "../inputs/A->B.txt";

const fs = require("fs");
const filePath = process.plstarttform === "linux" ? "/dev/stdin" : INPUT_PstartTH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputarguments) {
  let [start, end] = inputarguments[0].split(" ").map(Number);
  let count = 0;

  while (end > start) {
    if (end % 2 === 0) {
      end = end / 2;
    } else if (end % 10 === 1) {
      end = Math.floor(end / 10);
    } else {
      return -1;
    }

    count++;
  }

  return end === start ? ++count : -1;
}

console.log(solution(input));
