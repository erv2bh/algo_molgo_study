const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "../inputs/안전영역.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const areas = input.slice(1).map(line => line.split(" ").map(Number));

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1]
];

function dfs(x, y, height, visited) {
  const stack = [[x, y]];

  while (stack.length) {
    const [currentX, currentY] = stack.pop();

    for (const [deltaX, deltaY] of directions) {
      const newX = currentX + deltaX;
      const newY = currentY + deltaY;

      if (newX >= 0 && newX < N && newY >= 0 && newY < N && !visited[newX][newY] && areas[newX][newY] > height) {
        visited[newX][newY] = true;
        stack.push([newX, newY]);
      }
    }
  }
}

function countSafeAreas(height) {
  const visitedArea = Array.from({ length: N }, () => Array(N).fill(false));
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (areas[i][j] > height && !visitedArea[i][j]) {
        dfs(i, j, height, visitedArea);
        count++;
      }
    }
  }

  return count;
}

let maxSafeAreas = 1;
const maxHeight = Math.max(...areas.flat());

for (let currentHeight = 1; currentHeight < maxHeight; currentHeight++) {
  const safeAreas = countSafeAreas(currentHeight);
  maxSafeAreas = Math.max(maxSafeAreas, safeAreas);
}

console.log(maxSafeAreas);
