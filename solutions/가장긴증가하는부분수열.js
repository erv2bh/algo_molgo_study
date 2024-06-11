const INPUT_PATH = "../inputs/가장긴증가하는부분수열.txt"

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);

function solution(nums) {
  if (nums.length === 0) return 0;

  const dp = [];

  for (let num of nums) {
    let left = 0, right = dp.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (dp[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    dp[left] = num;
  }

  return dp.length;
}

console.log(solution(arr));
