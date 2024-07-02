const INPUT_PATH = "../inputs/창고다각형.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const pillars = inputArguments
    .slice(1)
    .map((pillar) => pillar.split(" ").map(Number));
  const sortedPillarList = pillars.sort((a, b) => b[1] - a[1])[0][1];
}

console.log(solution(input));
