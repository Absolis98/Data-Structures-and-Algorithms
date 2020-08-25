var stack = [];
stack.push("google");
stack.push("wikipedia");
stack.push("youtube");
stack.push("reddit");
console.log(stack);
stack.pop();
stack.pop();
console.log(stack);

var stack2 = [];
stack2.unshift("google");
stack2.unshift("wikipedia");
stack2.unshift("youtube");
stack2.unshift("reddit");
console.log(stack2);
stack2.shift();
stack2.shift();
console.log(stack2);

//or

class Stack {
	constructor(){
		this.items = [];
	}

	push(val){
		this.items.push(val);
	}

	pop(){
		if(this.items.length == 0) return undefined;
		return this.items.pop();
	}

	peek(){
		return this.items[this.items.length - 1];
	}

	isEmpty(){
		return this.items.length == 0;
	}

	printStack(){
		var str = "";
		for(let i = 0; i < this.items.length; i++) str += this.items[i] + " ";
		return console.log(str);
	}
}

let myStack = new Stack();
console.log(myStack.isEmpty());
myStack.push("first");
myStack.push("second");
myStack.push("third");
myStack.push("fourth");
console.log(myStack.isEmpty());
myStack.printStack();
myStack.pop();
myStack.pop();
myStack.printStack()