class Node{
	constructor(val){
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val){
		let newTail = new Node(val);
		if(!this.head){
			this.head = newTail;
			this.tail = newTail;
		} else{
			this.tail.next = newTail;
			newTail.prev = this.tail;
			this.tail = newTail;
		}
		this.length++;
		return this;
	}

	pop(){
		if(!this.head) return undefined;
		let oldTail = this.tail;
		if(this.length === 1) {
			this.head = null;
			this.tail = null;
		} else{
			this.tail = oldTail.prev;
			this.tail.next = null;
			oldTail.prev = null;
		}
		this.length--;
		return oldTail;
	}

	shift(){
		if(!this.head) return undefined;
		let oldHead = this.head;
		if(this.length === 1){
			this.head = null;
			this.tail = null;
		} else{
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;
		return oldHead;
	}

	unshift(val){
		let newHead = new Node(val);
		if(!this.head){
			this.head = newHead;
			this.tail = newHead;
		} else{
			this.head.prev = newHead;
			newHead.next = this.head;
			this.head = newHead;
		}
		this.length++;
		return this;
	}

	get(index){
		if(index < 0 || index >= this.length) return null;
		let count, current;
		if(index <= this.length/2){
			count = 0;
			current = this.head;
			while(count !== index){
				current = current.next;
				count++;
			}
		} else{
			count = this.length - 1;
			current = this.tail;
			while(count !== index){
				current = current.prev;
				count--;
			}
		}
		return current;
	}

	set(index, val){
		let foundNode = this.get(index);
		if(foundNode != null) {
			foundNode.val = val;
			return true;
		}
		return false;
	}

	insert(index, val){
		if(index < 0 || index > this.length) return false;
		else if (index === 0) return !!this.unshift(val);
		else if (index === this.length) return !!this.push(val);
		
		let newNode = new Node(val);
		let prevNode = this.get(index-1);
		newNode.next = prevNode.next, prevNode.next.prev = newNode;
		prevNode.next = newNode, newNode.prev = prevNode;
		this.length++;
		
		return true;
	}

	remove(index){
		if(index < 0 || index >= this.length) return false;
		else if(index === 0) return !!this.shift();
		else if(index === this.length - 1) return !!this.pop();

		let remNode = this.get(index);
		remNode.prev.next = remNode.next;
		remNode.next.prev = remNode.prev;
		remNode.next = null;
		remNode.prev = null;
		this.length--;
		return true;
	}

	reverse(){
		if(this.length===0) return undefined;
		else if(this.length===1) return this;

		let current = this.head;
		this.head = this.tail;
		this.tail = current;
		let next;
		
		for(let i=0; i<this.length;i++){
		    next = current.next;
		    current.next = current.prev; //swap next and prev
		    current.prev = next;
		    current = next;
		}	 
		return this;
	    }

	reverse2(){
		if (this.head === null) return null;
		else if(this.length===1) return this;

		let currentNode = this.head;
		this.tail = currentNode;

		while (currentNode) {
			let prev = currentNode.prev;
			currentNode.prev = currentNode.next;
			currentNode.next = prev;

			if (currentNode.prev) currentNode = currentNode.prev;
			else {
				this.head = currentNode;
				break;
			}
		}
		return this;
	}

	reverse3(){
		if(this.length===0)return undefined;
		if(this.length===1)return this;
		let aroo=this.head;
		//I found it impoprtant* to activate the .next which is a part of the NODE, not the dblylinked constructor
		// Allows you to 'save the data link'... using the this.head will not... b/c
		// this.head within this current class is being manipulated and wont allow it be saved; this.head is fluid.
		let nextNode=this.head.next;
		let previous=null;
		this.head=this.tail;
		this.tail=aroo; 
		//so we just set this.head to last item's node sequence
		// this code works from the new this.head but uses the value of the original this.head to start the code change,
		// while it links the chains from index 0 to 1 to 2 to 3 until it reaches the new this.head
		for(let i=0; i<this.length; i++){
			aroo.next=previous; //sets the .next to previous
			//connects the current node with the new node before it.(new node was previously after in original chain)
			aroo.prev=nextNode;
			previous=aroo; //saves the completed and changed node;
			aroo=aroo.prev;  //targets the prev node in the now completed chain.
			// had to cap nextNode less it would attempt to access the 'next' of a null in 
			// the last iteration and throw undefined;
			if(this.length!==i+1)nextNode=nextNode.next;
		}
		return this;
	}

	reverse4(){
		let currentNode = this.head;
		this.head = this.tail;
		this.tail = currentNode;
		let nextNode = null;
		let prevNode = null;

		for(let i = 0; i < this.length; i++){
			nextNode = currentNode.next;
			currentNode.next = prevNode;
			currentNode.prev = nextNode;
			prevNode = currentNode;
			currentNode = nextNode;
		}
		return this;
	}

	print(){
		var arr = [];
		var current = this.head;
		while(current){
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);
	}

}

let myList = new DoublyLinkedList();
myList.push(10);
myList.push(101);
myList.print();
myList.reverse4().print();
myList.print();
myList.reverse4().print();


//es6 version of get
// get = (i) => {
//     // short circuit
//     if (i !== 0 && (!i || i < 0 || i >= this.length)) return;
//     if (i === 0) return this.head;
//     if (i === this.length - 1) return this.tail;
 
//     // setup
//     let mid = ~~(this.length / 2);
//     let startLeft = i < mid;
//     let node = startLeft ? this.head : this.tail;
//     let ctr = startLeft ? 0 : this.length - 1;
 
//     //find index
//     while (i !== ctr) {
//       node = startLeft ? node.next : node.prev;
//       startLeft ? ctr++ : ctr--;
//     }
 
//     return node;
//   };


// set(index, value){
//     let node = this.get(index);
//     node? node.val = value : undefined; 
//     return node; 
// }

// set(index, val){
//         let foundNode = this.get(index);
//         if(foundNode) return !!(foundNode.val = val);
//         return false;
//     }