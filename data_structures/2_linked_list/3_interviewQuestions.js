class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		let newNode = new Node(val);
		if(!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if(!this.head) return undefined;
		let current = this.head;
		let newTail = current;
		while(current.next){
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if(this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return this;
	}

	shift()
}

let myList = new LinkedList();
myList.push(4);
myList.push(5);
myList.push(2);
console.log(myList);
myList.pop();
console.log(myList);
