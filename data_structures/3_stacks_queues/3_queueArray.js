//2 methods
//First: push + shift
let q = [];
q.push("first");
q.push("second");
q.push("third");
console.log(q);
console.log(q.shift());
console.log(q.shift());
console.log(q.shift());
console.log(q);

//Second: pop + unshift
let q2 = [];
q2.unshift("first");
q2.unshift("second");
q2.unshift("third");
console.log(q2);
console.log(q2.pop());
console.log(q2.pop());
console.log(q2.pop());
console.log(q2);