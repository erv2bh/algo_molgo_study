//INPUT_PATH에 오늘 문제에 해당하는 input파일경로를 적어주세요
const INPUT_PATH = "../inputs/ATM.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solution(input) {
  const N = parseInt(input[0]);
  const P = input[1].split(" ").map(Number);
  const sortedArray = P.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < N; i++) {
    sum += sortedArray[i] * (N - i);
  }

  return sum;
}

// 백준은 return이 아닌 console.log로 결과값을 판단합니다.
// console.log를 활용하여 log로 정답이 출력 되게끔 로직을 작성해 주세요.
console.log(solution(input));
