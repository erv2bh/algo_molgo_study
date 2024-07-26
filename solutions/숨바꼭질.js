const INPUT_PATH = "../inputs/숨바꼭질.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);

function solution(N, K) {
  if (N === K) return 0;

  const queue = [[N, 0]];
  const visited = new Set([N]);

  while (queue.length > 0) {
    const [position, time] = queue.shift();

  }
}
