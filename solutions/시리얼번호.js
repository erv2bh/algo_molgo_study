const INPUT_PATH = "../inputs/시리얼번호.txt";
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const N = Number(inputArguments[0]);
  const serials = inputArguments.slice(1);

  function sumOfDigits(str) {
    return str.split('').reduce((sum, char) => {
      return sum + (isNaN(Number(char)) ? 0 : Number(char));
    }, 0);
  };

  function compare(a, b) {
    if (a.length !== b.length) {
      return a.length - b.length;
    }

    const sumA = sumOfDigits(a);
    const sumB = sumOfDigits(b);

    if (sumA !== sumB) {
      return sumA - sumB;
    }

    return a.localeCompare(b);
  };

  serials.sort(compare);

  return serials.join('\n');
}

console.log(solution(input));
