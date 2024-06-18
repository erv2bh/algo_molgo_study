const INPUT_PATH = "../inputs/촌수계산.txt";
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
const [person1, person2] = input[1].split(" ").map(Number);
const m = parseInt(input[2]);

const relations = [];

for (let i = 3; i < 3 + m; i++) {
  relations.push(input[i].split(" ").map(Number));
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }
}

function makeTree(n, relations) {
  const nodes = Array.from({ length: n + 1 }, (_, i) => new TreeNode(i));
  const hasParent = Array(n).fill(false);

  relations.forEach(([parent, child]) => {
    nodes[parent].addChild(nodes[child]);
    hasParent[child] = true;
  });

  const roots = nodes.filter((_, index) => index > 0 && !hasParent[index]);

  return roots;
}

function findPath(root, target, path = []) {
  if (root === null) return null;
  path.push(root.value);

  if (root.value === target) return path;

  for (let child of root.children) {
    const result = findPath(child, target, path);

    if (result) return result;
  }

  path.pop();

  return null;
}

function calculateRelationship(n, person1, person2, relations) {
  const roots = makeTree(n, relations);

  for (const root of roots) {
    const path1 = findPath(root, person1);
    const path2 = findPath(root, person2);

    if (path1 && path2) {
      let i = 0;

      while (i < path1.length && i < path2.length && path1[i] === path2[i]) {
        i++;
      }

      return (path1.length - i) + (path2.length - i);
    }
  }

  return -1;
}

console.log(calculateRelationship(n, person1, person2, relations));
