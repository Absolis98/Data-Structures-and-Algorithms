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

	removeVertex(v1) {
		if(this.adjacencyList[v1])
			while(this.adjacencyList[v1].length) {
				const adjacentVertex = this.adjacencyList[v1].pop();
				this.removeEdge(v1, adjacentVertex);
			}
		delete this.adjacencyList[v1];
	}

	removeVertex2(v1) {
		for (let edge of this.adjacencyList[v1])
			this.removeEdge(v1, edge);
		delete this.adjacencyList[v1];
	}
}

let myGraph = new Graph;
myGraph.addVertex('A');
myGraph.addVertex('B');
myGraph.addVertex('C');
myGraph.addEdge('A', 'B');
myGraph.addEdge('A', 'C');
console.log(myGraph);
//myGraph.removeEdge('A', 'B');
//myGraph.removeEdge('A', 'C');
console.log(myGraph);
myGraph.removeVertex2('C');
console.log(myGraph);
