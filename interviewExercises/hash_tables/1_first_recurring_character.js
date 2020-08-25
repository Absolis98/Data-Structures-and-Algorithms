//Google question
//given an array = [1,34,5,3,6,34,3,2,43,3]
//return the first recurring character

let arr = [2,3,3,2,6,34,3,2,43,3];

//O(n) time and space complecity
function firstRecChar(arr) {
	let map = {};
	for(let i=0; i<arr.length; i++){
		if(map[arr[i]] !== undefined)	return arr[i];
		else map[arr[i]] = i;
	}
	return undefined;
}




//Naive Approach O(n^2)
function firstRecChar2(arr) {
	for(let i=0; i<arr.length; i++){
		for(let j=i-1; j>0; j--)
			if(arr[i] === arr[j]) return arr[i];
	}
	return undefined;
}

console.log(firstRecChar2(arr));