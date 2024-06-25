const INPUT_PATH = "../inputs/회의실배정.txt"

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input){
  const n = parseInt(input[0]);
  const meetings = [];

  for (let i = 1; i <= n; i++) {
    const [start, end] = input[i].split(" ").map(Number);
    meetings.push({ start, end });
  }

  meetings.sort((a, b) => a.end - b.end);

  let currentTime = 0;
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (currentTime <= meetings[i].start) {
      currentTime = meetings[i].end;
      count++;
    }
  }

  return count;
}

console.log(solution(input));
