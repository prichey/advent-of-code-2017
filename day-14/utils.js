// reused from day 12
class Graph {
  constructor() {
    this.nodes = [];
    this.edges = [];
  }

  hasNode(node) {
    return this.nodes.includes(node);
  }

  // create if it doesn't exist
  touchNode(node) {
    if (this.hasNode(node) !== true) {
      this.nodes.push(node);
      this.edges[node] = [];
    }
  }

  // create if it doesn't exist
  touchEdge(node1, node2) {
    if (this.edges[node1].includes(node2) !== true)
      this.edges[node1].push(node2);
    if (this.edges[node2].includes(node1) !== true)
      this.edges[node2].push(node1);
  }
}

function mergeLists(list, sublist, startIndex) {
  for (let i = 0; i < sublist.length; i++) {
    list[(startIndex + i) % list.length] = sublist[i];
  }
  return list;
}

function getSublist(list, startIndex, length) {
  const subList = [];
  for (let i = 0; i < length; i++) {
    subList.push(list[(i + startIndex) % list.length]);
  }
  return subList;
}

function getInitialList(length) {
  const list = [];
  for (let i = 0; i < length; i++) {
    list.push(i);
  }
  return list;
}

function convolveList(list, inputs, pointerIndex, skipSize) {
  inputs.map(input => {
    const sublist = getSublist(list, pointerIndex, input);
    sublist.reverse();
    list = mergeLists(list, sublist, pointerIndex);
    pointerIndex = (pointerIndex + input + skipSize++) % list.length;
  });
  return [list, pointerIndex, skipSize];
}

function convolveListMultipleTimes(input, length, times) {
  let inputs = input
    .toString()
    .trim()
    .split('')
    .map(char => char.charCodeAt(0));
  inputs = inputs.concat([17, 31, 73, 47, 23]);

  let list = getInitialList(length);
  let pointerIndex = 0;
  let skipSize = 0;

  for (let i = 0; i < times; i++) {
    [list, pointerIndex, skipSize] = convolveList(
      list,
      inputs,
      pointerIndex,
      skipSize
    );
  }
  return list;
}

function xorBlock(block) {
  return block.reduce((val, current) => val ^ current);
}

function getDenseHash(sparseHash) {
  const denseHash = [];
  const segments = 16;
  const numBlocks = sparseHash.length / segments;

  for (let i = 0; i < numBlocks; i++) {
    const block = sparseHash.slice(numBlocks * i, numBlocks * (i + 1));
    const xoredBlock = xorBlock(block);
    denseHash.push(xoredBlock);
  }

  return denseHash;
}

function findKnotHash(input, length = 256) {
  const convolvedList = convolveListMultipleTimes(input, length, 64);
  const denseHash = getDenseHash(convolvedList);

  return denseHash.reduce(
    (knotHash, current) => (knotHash += current.toString(16).padStart(2, '0')),
    ''
  );
}

function calculateUsedSquaresFromHash(hash) {
  const binaryHash = hexStrToBinary(hash);
  return binaryHash.split('').filter(char => char === '1').length;
}

function hexStrToBinary(hex) {
  let binaryStr = '';
  hex
    .toString()
    .trim()
    .split('')
    .map(char => {
      binaryStr += hexCharToBinary(char);
    });

  return binaryStr;
}

function hexCharToBinary(char) {
  let binChar = parseInt(char, 16).toString(2);
  while (binChar.length < 4) binChar = '0' + binChar; // left pad, not necessary but aesthetically pleasing
  return binChar;
}

function getGridNumFromCoords(x, y, width) {
  const num = x + width * y;
  return num.toString();
}

function isOne(num) {
  return num === '1';
}

function getGridConnections(grid) {
  const gridConnections = [];

  const gridHeight = grid.length;
  const gridWidth = grid[0].length;

  for (let y = 0; y < gridHeight; y++) {
    for (let x = 0; x < gridWidth; x++) {
      if (isOne(grid[y][x])) {
        const current = getGridNumFromCoords(x, y, gridWidth);
        const connections = [];
        if (x > 0 && isOne(grid[y][x - 1]))
          connections.push(getGridNumFromCoords(x - 1, y, gridWidth));
        if (x < grid[y].length - 2 && isOne(grid[y][x + 1]))
          connections.push(getGridNumFromCoords(x + 1, y, gridWidth));
        if (y > 0 && isOne(grid[y - 1][x]))
          connections.push(getGridNumFromCoords(x, y - 1, gridWidth));
        if (y < gridHeight - 2 && isOne(grid[y + 1][x]))
          connections.push(getGridNumFromCoords(x, y + 1, gridWidth));

        if (connections.length > 0) {
          gridConnections.push({
            from: current,
            to: connections
          });
        } else {
          gridConnections.push({
            from: current,
            to: [current]
          });
        }
      }
    }
  }

  return gridConnections;
}

function getNodeGroup(node, graph) {
  const nodesInCycle = [node];
  const visitedNodes = [node];
  let queue = [node];

  while (queue.length > 0) {
    const fromNode = queue.shift();
    graph.edges[fromNode].map(toNode => {
      if (visitedNodes.includes(toNode) !== true) {
        visitedNodes.push(toNode);
        if (nodesInCycle.includes(toNode) !== true) nodesInCycle.push(toNode);
        queue.push(toNode);
      }
    });
  }

  return nodesInCycle;
}

function getNumGroups(graph) {
  let visitedNodes = [];
  let groups = [];

  graph.nodes.map(node => {
    if (visitedNodes.includes(node) !== true) {
      let group = getNodeGroup(node, graph);
      if (groups.includes(group) !== true) {
        groups.push(group);
        group.map(groupNode => visitedNodes.push(groupNode));
      }
    }
  });

  return groups.length;
}

function traverseGridToFindNumGroupedRegions(grid) {
  const graph = new Graph();
  const gridConnections = getGridConnections(grid);

  gridConnections.map(gridItem => {
    graph.touchNode(gridItem.from);
    gridItem.to.map(toNode => {
      graph.touchNode(toNode);
      graph.touchEdge(gridItem.from, toNode);
    });
  });

  return getNumGroups(graph);
}

exports.findKnotHash = findKnotHash;
exports.calculateUsedSquaresFromHash = calculateUsedSquaresFromHash;
exports.hexStrToBinary = hexStrToBinary;
exports.traverseGridToFindNumGroupedRegions = traverseGridToFindNumGroupedRegions;
