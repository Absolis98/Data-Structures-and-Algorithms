class Node {
	constructor(val){
		this.val = val;
		this.left = null;
		this.right = null;
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

  dfsPreOrder(){
    let visited = [];
    function traverse(node){
      visited.push(node.val);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

  dfsPreOrderItera(){
        if (this.root == null) return undefined
        else {
            let queue = [this.root]
            let values = []
            while (queue.length != 0){
                let poppedNode = queue.pop()
                values.push(poppedNode.val)
                if (poppedNode.right != null){
                    queue.push(poppedNode.right)
                }
                if (poppedNode.left != null){
                    queue.push(poppedNode.left)
                }
            }
            return values
        }
    }

  dfsPostOrder(){
    let visited = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      visited.push(node.val);
    }
    traverse(this.root);
    return visited;
  }

  dfsInOrder(){
    let visited = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      visited.push(node.val);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }
}

let myTree = new BinarySearchTree();
myTree.insert(45);
myTree.insert(24);
myTree.insert(64);
myTree.insert(77);
myTree.insert(43);
console.log(myTree.dfsPreOrder());
console.log(myTree.dfsPreOrderItera());
console.log(myTree.dfsPostOrder());
console.log(myTree.dfsInOrder());