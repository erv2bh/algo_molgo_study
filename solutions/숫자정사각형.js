const INPUT_PATH = "../inputs/숫자정사각형.txt"

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const matrix = [];
for (let i = 1; i <= N; i++) {
  matrix.push(input[i].split("").map(Number));
}

function solution(N, M, matrix) {
  if (N === 1 || M === 1) {
    return 1;
  }

  const result = [];
  let maxSize = Math.min(N, M);
  let i = 0, j = 0;

  while (maxSize > 0) {
    if (matrix[i][j] === matrix[i + maxSize - 1][j] &&
      matrix[i][j] === matrix[i][j + maxSize - 1] &&
      matrix[i][j] === matrix[i + maxSize - 1][j + maxSize - 1]) {
      result.push(maxSize * maxSize);
    }

    j += 1;

    if (j + maxSize - 1 >= M) {
      j = 0;
      i += 1;
    }

    if (i + maxSize - 1 >= N) {
      maxSize -= 1;
      i = 0;
      j = 0;
    }
  }

  return result.length > 0 ? Math.max(...result) : 1;
}

console.log(solution(N, M, matrix));
