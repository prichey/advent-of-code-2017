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

function buildGraphFromInput(input) {
  const graph = new Graph();

  input
    .toString()
    .trim()
    .split('\n')
    .map(inputLine => {
      const split = inputLine.split(' <-> ');
      if (split.length !== 2) {
        console.log('shit');
      }

      const fromNode = parseInt(split[0]);
      const toNodes = split[1].split(',').map(nodeStr => parseInt(nodeStr));

      graph.touchNode(fromNode);

      toNodes.map(toNode => {
        graph.touchNode(toNode);
        graph.touchEdge(fromNode, toNode);
      });
    });

  return graph;
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

exports.buildGraphFromInput = buildGraphFromInput;
exports.getNodeGroup = getNodeGroup;
exports.getNumGroups = getNumGroups;
