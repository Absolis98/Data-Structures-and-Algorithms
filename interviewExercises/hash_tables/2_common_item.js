//O(a*b)
//O(1) - space complexity
function containsCommonItem(arr1, arr2){
	for(let i=0; i<arr1.length; i++)
		for(let j=0; j<arr2.length; j++)
			if(arr1[i] === arr2[j]) return true;
	return false;
}

const arr1 = ['a', 'b', 'c', 'x'];
const arr2 = ['z', 'y', 'a'];


//O(a+b) 
//O(a)
//loop through first array and create  object properties === items in array
//loop through second array and check if item in second array exists on created object
function containsCommonItem2(arr1, arr2) {
	let map = {};
	for(let i=0; i<arr1.length; i++)
		if(!map[arr1[i]]){
			const item = arr1[i];
			map[item] = true;
		}
	for(let j=0; j<arr2.length; j++)
		if(map[arr2[j]]) return true;

	return false;
}

console.log(containsCommonItem(arr1, arr2));
console.log(containsCommonItem2(arr1, arr2));