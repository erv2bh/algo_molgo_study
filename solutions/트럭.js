const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "../inputs/트럭.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, w, L] = input[0].split(" ").map(Number);
const trucks = input[1].split(" ").map(Number);

function solution(n, w, L, trucks) {
  let time = 0;
  let weight = 0;
  const bridge = [];

  while (trucks.length > 0 || bridge.length > 0) {
    time++;

    if (bridge.length > 0 && time - bridge[0].time === w) {
      weight -= bridge.shift().weight;
    }

    if (trucks.length > 0 && weight + trucks[0] <= L) {
      const truck = trucks.shift();
      bridge.push({ weight: truck, time: time });
      weight += truck;
    }
  }

  return time;
}

console.log(solution(n, w, L, trucks));
