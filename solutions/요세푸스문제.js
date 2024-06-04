//INPUT_PATH에 오늘 문제에 해당하는 input파일경로를 적어주세요
const INPUT_PATH = "../inputs/요세푸스문제.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, K] = input[0].split("").map(Number);

function solution(N, K) {
  const circle = [];
  const result = [];
  let index = 0;

  for (let i = 1; i <= N; i++) {
    circle.push(i);
  }

  while (circle.length > 0) {
    index = (index + K - 1) % circle.length;
    result.push(circle.splice(index, 1));
  }

  return result.join(", ");
}

// 백준은 return이 아닌 console.log로 결과값을 판단합니다.
// console.log를 활용하여 log로 정답이 출력 되게끔 로직을 작성해 주세요.
console.log(`<${solution(N, K)}>`);
