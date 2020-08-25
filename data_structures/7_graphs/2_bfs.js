class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if(!this.adjacencyList[vertex])
			this.adjacencyList[vertex] = [];
	}

	addEdge(v1, v2) {
		if(this.adjacencyList[v1])
			this.adjacencyList[v1].push(v2);
		if(this.adjacencyList[v2])
			this.adjacencyList[v2].push(v1);
	}

	removeEdge(v1, v2) {
		let x =  this.adjacencyList[v1];
        let y =  this.adjacencyList[v2];
		if(this.adjacencyList[v1])
			x.splice(x.indexOf(v2),1);
		if(this.adjacencyList[v2])
			y.splice(y.indexOf(v1),1);
	}

	removeVertex(vertex) {
		if(this.adjacencyList[vertex])
			while(this.adjacencyList[vertex].length) {
				const adjacentVertex = this.adjacencyList[vertex].pop();
				this.removeEdge(vertex, adjacentVertex);
			}
		delete this.adjacencyList[vertex];
	}

	removeVertex2(vertex) {
		for (let edge of this.adjacencyList[vertex])
			this.removeEdge(vertex, edge);
		delete this.adjacencyList[vertex];
	}

	depthFirstRecursive(start) {
		
	}
}

let myGraph = new Graph;
myGraph.addVertex('A');
myGraph.addVertex('B');
myGraph.addVertex('C');
myGraph.addVertex('D');
myGraph.addVertex('E');
myGraph.addVertex('F');

myGraph.addEdge('A', 'B');
myGraph.addEdge('A', 'C');
myGraph.addEdge('B', 'D');
myGraph.addEdge('C', 'E');
myGraph.addEdge('D', 'E');
myGraph.addEdge('D', 'F');
myGraph.addEdge('E', 'F');

console.log(myGraph);
