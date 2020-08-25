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

	contains2(val){
		let current = this.root;
		while(current){
			if(val === current.val) return true;
			if(val < current.val){
				if(!current.left) return false;
				current = current.left;
			} else{
				if(!current.right) return false;
				current = current.right;
			}
		}
	}

	remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!
        
        //Option 1: No right child: 
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            
            //if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            
            //if parent < current value, make left child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        
        //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if(parentNode === null) {
            this.root = currentNode.right;
          } else {
            
            //if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            
            //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        
        //Option 3: Right child that has a left child
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          
          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
      return true;
      }
    }
  }
}

let myTree = new BinarySearchTree();
myTree.insert(88);
console.log(myTree);
myTree.insert(20);
myTree.insert(100);
console.log(myTree);
myTree.insert(21);
myTree.insert(95);
console.log(myTree);
console.log(myTree.contains(8));






// different approach to insert
// insert(value){
//     var newNode = new Node(value);
//     if (traverse(this.root)) this.root = newNode;
 
//     function traverse(current){
//         if (current === null) return true;
 
//         if (newNode.value > current.value) {
//             if (traverse(current.right)) current.right = newNode;
//         } else if (newNode.value < current.value) {
//             if (traverse(current.left)) current.left = newNode;
//         }
 
//         return false;
//     }
 
//     return this;
// }

// find(val, root = this.root){
//         if (!root) return false;
//         if (val === root.val) return true; // or return root;
//         if (val > root.val) return this.find(val, root.right);
//         return this.find(val, root.left);
//     }
