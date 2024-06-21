const INPUT_PATH = "../inputs/과자나눠주기.txt";
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M] = input[0].split(" ").map(Number);
const snacks = input[1].split(" ").map(Number);

function canSplit(snacks, M, length) {
  let count = 0;

  for (let snack of snacks) {
    count += Math.floor(snack / length);
  }

  return count >= M;
}

function findMaxLength(M, snacks) {
  const maxLength = Math.max(...snacks);
  let result = 0;

  for (let length = 1; length <= maxLength; length++) {
    if (canSplit(snacks, M, length)) {
      result = length;
    }
  }

  return result;
}

console.log(findMaxLength(M, snacks));
