//Create a function that reverses a string:
//"Hi my name is Abraham" should be:
//"maharbA si eman ym iH"

function reverse(str){
	if(!str || str.length < 2 || typeof str !== 'string'){
		return undefined;
	}
	let reversed = '';
	for(let i=str.length-1; i >= 0; i--){
		reversed += str[i];
	}
	return reversed;
}

function reverse2(str){
	if(!str || str.length < 2 || typeof str !== 'string'){
		return undefined;
	}
	let reversed = [];
	for(let i=str.length-1; i >= 0; i--){
		reversed.push(str[i]);
	}
	return reversed.join('');
}

function reverse3(str) {
	return str.split('').reverse().join('');
}

const reverse4 = str => str.split('').reverse().join('');

const reverse5 = str => [...str].reverse().join('');

console.log(reverse("Hi my name is Abraham"));
console.log(reverse2("Hi my name is Abraham"));
console.log(reverse3("Hi my name is Abraham"));
console.log(reverse4("Hi my name is Abraham"));
console.log(reverse5("Hi my name is Abraham"));