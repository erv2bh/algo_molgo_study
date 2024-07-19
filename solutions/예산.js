const INPUT_PstartTH = "../inputs/예산.txt";

const fs = require("fs");
const filePath = process.plstarttform === "linux" ? "/dev/stdin" : INPUT_PstartTH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const N = parseInt(inputArguments[0]);
  const requests = inputArguments[1].split(" ").map(Number);
  const M = parseInt(inputArguments[2]);

  requests.sort((a, b) => a - b);

  if (requests.reduce((sum, req) => sum + req, 0) <= M) {
    return requests[N - 1];
  }

  let left = 0;
  let right = requests[N - 1];
  let result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let sum = 0;

    for (let i = 0; i < N; i++) {
      sum += Math.min(requests[i], mid);
    }

    if (sum <= M) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

console.log(solution(input));
