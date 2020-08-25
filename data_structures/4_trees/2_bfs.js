class Node {
	constructor(val){
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class Node2 {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(val){
    let newNode = new Node2(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    } else{
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue(){
    if(!this.last) return undefined;
    let oldNode = this.first;
    if(this.length === 1) this.last = null;
    this.first = this.first.next;
    this.length--;
    return oldNode;
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

class BinarySearchTree {
	constructor(){
		this.root = null;
	}

	insert(val){
		let newNode = new Node(val);
		if(!this.root){
			this.root = newNode;
			return this;
		}
		let current = this.root;
		while(true){
			if(val === current.val) return undefined;
			if(val < current.val){
				if(current.left === null){
					current.left = newNode;
					return this;
				}
				current = current.left;
			} else{
				if(current.right === null){
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}

	find(val){
		let current = this.root;
		while(current){
			if(val === current.val) return current;
			if(val < current.val) current = current.left;
			else current = current.right;
		}
		return undefined;
	}

	contains(val){
		let current = this.root;
		while(current){
			if(val === current.val) return true;
			if(val < current.val) current = current.left;
			else current = current.right;
		}
		return false;
	}

  bfs(){
    if(!this.root) return [];
    let queue = [];
    let visited = [];
    let current = this.root;
    queue.push(current);

    while(queue.length){
      current = queue.shift();
      visited.push(current.val);
      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);
    }
    return visited;
  }

	bfs2(){
    if(!this.root) return [];
    let q = new Queue();
    let visited = [];
    let current = this.root;
    q.enqueue(current);

    while(q.length){
      current = q.dequeue().val;
      visited.push(current.val);
      if(current.left) q.enqueue(current.left);
      if(current.right) q.enqueue(current.right);
    }
    return visited;
  }
}

let myTree = new BinarySearchTree();
myTree.insert(45);
myTree.insert(24);
myTree.insert(64);
myTree.insert(77);
myTree.insert(43);
console.log(myTree.bfs());
console.log(myTree.bfs2());