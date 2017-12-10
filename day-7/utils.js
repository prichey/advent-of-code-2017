class Node {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
    this.children = [];
    this.childrenWeight = 0;
  }

  childrenAreBalanced() {
    if (this.children.length > 0) {
      const totalChildrenWeight = this.children.reduce(
        (sum, child) => sum + child.getTotalWeight(),
        0
      );

      // if children are balanced, they each should weigh totalWeight / numChildren
      return (
        totalChildrenWeight ===
        this.children[0].totalWeight * this.children.length
      );
    } else {
      return true;
    }
  }

  getTotalWeight() {
    return this.weight + this.childrenWeight;
  }
}

class Tree {
  constructor() {
    this.root = new Node('root', 0);
  }

  add(name, weight, parentName = null) {
    const node = new Node(name, weight);
    const parent = parentName !== null ? this.find(parentName) : this.root;
    parent.children.push(node);
  }

  remove(name) {
    if (this.root.name === name) {
      this.root = null;
    }

    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      for (let i = 0; i < node.children.length; i++) {
        if (node.children[i].name === name) {
          node.children.splice(i, 1);
        } else {
          queue.push(node.children[i]);
        }
      }
    }
  }

  find(name) {
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      if (node.name === name) {
        return node;
      }
      for (let i = 0; i < node.children.length; i++) {
        queue.push(node.children[i]);
      }
    }
    return null;
  }

  updateWeights() {
    traverseAndUpdateWeights(this.root);
  }

  findImproperWeight() {
    return traverseTreeToFindProperWeight(this.root);
  }
}

function traverseTreeToFindProperWeight(node) {
  if (node.children.length > 0) {
    node.children.sort(
      (current, next) => current.totalWeight - next.totalWeight
    );

    const numChildren = node.children.length;
    if (numChildren <= 2) return; // cannot compare children
    const [first, second, last] = [
      node.children[0],
      node.children[1],
      node.children[numChildren - 1]
    ];

    // when sorted, if first and last are different, row is wrong
    if (first.totalWeight !== last.totalWeight) {
      let unbalancedNode;
      if (first.totalWeight !== second.totalWeight) {
        unbalancedNode = first;
      } else {
        unbalancedNode = last;
      }

      if (unbalancedNode.childrenAreBalanced()) {
        // this is the node with improper weight
        const totalWeightDifference =
          unbalancedNode.totalWeight - second.totalWeight;
        return unbalancedNode.weight - totalWeightDifference;
      } else {
        // we're looking for the node with properly balanced children
        return traverseTreeToFindProperWeight(unbalancedNode);
      }
    }
  }
}

function traverseAndUpdateWeights(node) {
  node.childrenWeight = node.children.reduce(
    (sum, child) => sum + traverseAndUpdateWeights(child),
    0
  );
  node.totalWeight = node.childrenWeight + node.weight;
  return node.totalWeight;
}

function getNodesDataFromInput(input) {
  const nodesData = [];
  input
    .toString()
    .trim()
    .split('\n')
    .map(line => {
      nodesData.push(getNodeDataFromLine(line));
    });
  return nodesData;
}

function getNodeDataFromLine(line) {
  const nodeData = {};
  const [self, children] = line.trim().split('->');

  nodeData.children = [];
  if (children) {
    children.split(',').map(child => nodeData.children.push(child.trim()));
  }

  const selfInfo = self.split(' ');
  nodeData.name = selfInfo[0];
  nodeData.weight = parseInt(selfInfo[1].replace(/\D/g, ''));
  nodeData.parent = null;
  return nodeData;
}

function stackTower(input) {
  const nodesData = getNodesDataFromInput(input);
  const tree = new Tree();

  const unplacedNodesData = [];

  // first pass, add all nodes
  nodesData.map(nodeData => {
    addToTree(nodeData);
  });

  let count = 0;
  while (unplacedNodesData.length > 0) {
    for (let i = 0; i < unplacedNodesData.length; i++) {
      const nodeData = unplacedNodesData[i];
      addToTree(nodeData);
      unplacedNodesData.splice(i, 1);
    }
  }

  if (tree.root.children > 1) {
    throw new Error('there should only be one root');
  } else {
    tree.root = tree.root.children[0];
  }

  tree.updateWeights();
  return tree;

  function addToTree(nodeData) {
    if (nodeData.parent && !tree.find(nodeData.parent)) {
      unplacedNodesData.push(nodeData);
      return;
    }

    tree.remove(nodeData.name);
    tree.add(nodeData.name, nodeData.weight, nodeData.parent);

    nodeData.children.map(childName => {
      const childData = getNodeDataByName(childName);
      childData.parent = nodeData.name;

      if (tree.find(childName) !== null) {
        addToTree(childData);
      } else {
        unplacedNodesData.push(childData);
      }
    });
  }

  function getNodeDataByName(name) {
    for (let nodeData of nodesData) {
      if (nodeData.name === name) {
        return nodeData;
      }
    }

    return null;
  }
}

exports.stackTower = stackTower;
