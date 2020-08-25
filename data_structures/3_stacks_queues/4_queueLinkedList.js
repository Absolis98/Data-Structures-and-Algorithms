class Node {
	constructor(val){
		this.val = val;
		this.next = null;
	}
}

class Queue {
	constructor(){
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(val){
		let newNode = new Node(val);
		if(!this.last){
			this.first = newNode;
			this.last = newNode;
		} else{
			this.last.next = newNode;
			this.last = newNode;
		}
		return ++this.size;
	}

	dequeue(){
		if(!this.first) return null;
		let oldFirst = this.first;
		if(this.size === 1) this.last = null;
		this.first = this.first.next;
		this.size--;
		return oldFirst.val;
	}

	peek(){
		if(!this.first) return undefined;
		return this.first.val;
	}

	isEmpty(){
		return this.size === 0;
	}

	print(){
		var arr = [];
		var current = this.first;
		while(current){
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);
	}
}

let q = new Queue();
q.enqueue("first");
q.enqueue("second");
q.enqueue("third");
q.print();
console.log(q.isEmpty());
console.log(q.peek());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
q.print();
console.log(q.isEmpty());