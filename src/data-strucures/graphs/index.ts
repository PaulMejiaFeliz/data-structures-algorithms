class Graph<T> {
  numberOfNodes: number;
  adjacentList: Map<T, Set<T>>;

  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = new Map();
  }

  addVertex(node: T) {
    if (this.adjacentList.has(node)) {
      return;
    }

    this.adjacentList.set(node, new Set());
    this.numberOfNodes++;
  }

  addEdge(node1: T, node2: T) {
    if (!this.adjacentList.has(node1)) {
      console.log('Node 1 not found');
      return;
    }

    if (!this.adjacentList.has(node2)) {
      console.log('Node 2 not found');
      return;
    }

    this.adjacentList.get(node1)?.add(node2);
    this.adjacentList.get(node2)?.add(node1);
  }

  showConnections() {
    let graph: string[] = [];
    this.adjacentList.forEach((edges, vertex) => {
      let connections = '';
      edges.forEach((edge) => (connections += ` ${edge}`));
      graph.push(`${vertex} -->${connections}`);
    });

    console.log(graph.join('\n'));
  }
}

const myGraph = new Graph<number>();

myGraph.addVertex(0);
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addVertex(3);
myGraph.addVertex(4);
myGraph.addVertex(5);
myGraph.addVertex(6);

myGraph.addEdge(3, 1);
myGraph.addEdge(3, 4);
myGraph.addEdge(4, 2);
myGraph.addEdge(4, 5);
myGraph.addEdge(1, 2);
myGraph.addEdge(1, 0);
myGraph.addEdge(0, 2);
myGraph.addEdge(6, 5);

myGraph.showConnections();

// Answer:

// 0 --> 1 2
// 1 --> 3 2 0
// 2 --> 4 1 0
// 3 --> 1 4
// 4 --> 3 2 5
// 5 --> 4 6
// 6 --> 5
