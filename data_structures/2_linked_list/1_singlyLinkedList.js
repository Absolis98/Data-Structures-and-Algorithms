class Node{
	constructor(val){
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val){
		var newNode = new Node(val);
		if(!this.head){
			this.head = newNode;
			this.tail = this.head;
		} else{
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop(){
		if(!this.head) return undefined;
		var current = this.head;
		var newTail = current;
		while(current.next){
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if(this.length === 0){
			this.head = null;
			this.tail = null;
		}
		return this;
	}

	shift(){
		if(!this.head) return undefined;
		var oldHead = this.head;
		this.head = this.head.next;
		this.length--;
		if(this.length === 0){
			this.tail = null;
		}
		return oldHead;
	}

	unshift(val){
		let newHead = new Node(val);
		if(!this.head){
			this.head = newHead;
			this.tail = newHead;
		}else{
			newHead.next = this.head;
			this.head = newHead;
		}
		this.length++;
		return this;
	}

	get(index){
		if(index < 0 || index >= this.length) return null;
		var counter = 0;
		var current = this.head;
		while(counter !== index){
			current = current.next;
			counter++;
		}
		return current;
	}

	find(val) {
	    let curr = this.head;
	    for (let i = 0; i < this.length; i++) {
	      if (curr.val === val) return curr;
	      curr = curr.next;
	    }
	    return undefined;
	}

	set(index, val){
		var foundNode = this.get(index);
		if(foundNode){
			foundNode.val = val;
			return true;
		}
		return false;
	}

	insert(index, val){
		if(index < 0 || index > this.length) return false;
		else if(index === this.length) return !!this.push(val);
		else if(index === 0) return !!this.unshift(val);

		var newNode = new Node(val);
		var prevNode = this.get(index-1);
		newNode.next = prevNode.next;
		prevNode.next = newNode;
		this.length++;
		return true;
	}

	remove(index){
		if(index < 0 || index >= this.length) return undefined;
		else if(index === 0) return shift();
		else if(index === this.length - 1) return this.pop();
		var prevNode = this.get(index-1);
		var removed = prevNode.next;
		prevNode.next = removed.next;
		this.length--;
		return removed
	}

	reverse(){
		if(!this.head) return undefined;
		let current = this.head;
		this.head = this.tail;
		this.tail = current;
		var next;
		var prev = null;
		while(current !== null){
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
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

let myList = new SinglyLinkedList();
myList.push(0);
myList.push(1);
myList.push(2);
myList.push("hello");
myList.push(3);
myList.print();
myList.pop();
myList.print();
myList.shift();
myList.print();
myList.unshift(0);
myList.print();
console.log(myList.get(2));
console.log(myList.find("hello"));
myList.set(3, 4);
myList.print();
myList.insert(3, 3);
myList.print();
myList.remove(2);
myList.print();
myList.reverse();
myList.print();
myList.reverse();
myList.print();

// pop implemented with recursion
  // pop(newTail = null, current = this.head) {
  //   if (!current) return;
 
  //   if (current.next) return this.pop(current, current.next)
 
  //   !!(this.tail = newTail)
  //     ? this.tail.next = null
  //     : this.head = null;
 
  //   this.length--;
  //   return current
  // }
