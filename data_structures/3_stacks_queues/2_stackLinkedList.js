class Node{
	constructor(val){
		this.val = val;
		this.next = null;
	}
}

class Stack{
	constructor(){
		this.last = null;
		this.size = 0;
	}

	push(val){
		let newNode = new Node(val);
		if(!this.size) this.last = newNode;
		else{
			newNode.next = this.last;
			this.last = newNode;
		}
		return ++this.size;
	}

	pop(){
		if(!this.size) return undefined;
		let removedNode = this.last;
		this.last = this.last.next;
		this.size--;
		return removedNode.val;
		//removedNode is not explicitly set to null,
		//but is up for garbage collection
	}

	peek(){
		if(!this.last) return undefined;
		return this.last.val;
	}

	isEmpty(){
		return this.size === 0;
	}

	print(){
		var arr = [];
		var current = this.last;
		while(current){
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);
	}
}

let myStack = new Stack();
console.log(myStack.isEmpty());
myStack.push("first");
myStack.push("second");
myStack.push("third");
myStack.push("fourth"); //last in
console.log(myStack);
console.log(myStack.pop() + " - first out"); //first out
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack);
console.log(myStack.peek());
myStack.push("first");
myStack.push("second");
console.log(myStack.peek());
console.log(myStack.isEmpty());
myStack.print();