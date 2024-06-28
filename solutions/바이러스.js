const INPUT_PATH = "../inputs/바이러스.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const M = Number(input[1]);
const links = input.slice(2, 2 + M).map(line => line.split(" ").map(Number));

function solution(N, M, links) {
  const adjacencyList = Array.from({ length: N + 1 }, () => []);
  const visited = Array(N + 1).fill(false);
  let infectedComputer = 0;

  for (const [start, end] of links) {
    adjacencyList[start].push(end);
    adjacencyList[end].push(start);
  }

  function dfs(node) {
    visited[node] = true;

    for (let neighbor of adjacencyList[node]) {
      if (!visited[neighbor]) {
        dfs(neighbor);
        infectedComputer++;
      }
    }
  }

  dfs(1);

  return infectedComputer;
}

console.log(solution(N, M, links));
