class Node {
	constructor(val, priority){
		this.val = val;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor(){
		this.val = [];
	}

	enqueue(val, priority){
		let newNode = new Node(val, priority);
		this.val.push(newNode);
		this.bubbleUp();
	}

	bubbleUp(){
		let index = this.val.length - 1;
		const element = this.val[index];
		while(index > 0){
			let parentIndex = Math.floor((index - 1)/2);
			let parent = this.val[parentIndex];
			if(element.priority >= parent.priority) break;
			this.val[parentIndex] = element;
			this.val[index] = parent;
			index = parentIndex;
		}
	}

	dequeue(){
		const min = this.val[0];
		const end = this.val.pop();
		if(this.val.length > 0){
			this.val[0] = end;
			this.bubbleDown();
		}
		return min;
	}

	bubbleDown(){
		let index = 0;
		let length = this.val.length;
		const element = this.val[0];
		while(true){
			let leftChildIndex = 2 * index + 1;
			let rightChildIndex = 2 * index + 2;
			let leftChild, rightChild;
			let swap = null;

			if(leftChildIndex < length) {
				leftChild = this.val[leftChildIndex];
				if(leftChild.priority < element.priority)
					swap = leftChildIndex;
			}
			if(rightChildIndex < length){
				rightChild = this.val[rightChildIndex];
				if(
					(swap === null && rightChild.priority < element.priority) ||
					(swap !== null && rightChild.priority < leftChild.priority)
				) swap = rightChildIndex;
			}
			if(swap === null) break;
			this.val[index] = this.val[swap];
			this.val[swap] = element;
			index = swap;
		}
	}
}

let hospital = new PriorityQueue();
hospital.enqueue("common cold", 1);
hospital.enqueue("gunshot wound", 5);
hospital.enqueue("high fever", 2);
console.log(hospital.val);
console.log(hospital.dequeue());
console.log(hospital.val);

