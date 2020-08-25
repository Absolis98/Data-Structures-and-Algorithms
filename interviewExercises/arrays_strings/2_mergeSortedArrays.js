//merge two sorted arrays

function merge(arr1, arr2){
	const merged = [];
	let i = 0;
	let j = 0;
	while(i < arr1.length && j < arr2.length){
		if(arr1[i] < arr2[j]) merged.push(arr1[i++]);
		else merged.push(arr2[j++]);
	}
	while(i < arr1.length) merged.push(arr1[i++]);
	while(j < arr2.length) merged.push(arr2[j++]);
	return merged;
}

function merge2(arr1, arr2){
	const merged = [];
	let arr1Item = arr1[0];
	let arr2Item = arr2[0];
	let i = 1;
	let j = 1;

	//check input
	if(arr1.length === 0) {
		return arr2;
	}
	if(arr2.length === 0) {
		return arr1;
	}

	while(arr1Item || arr2Item){
		if(!arr2Item || arr1Item < arr2Item){
			merged.push(arr1Item);
			arr1Item = arr1[i++];
		} else{
			merged.push(arr2Item);
			arr2Item = arr2[j++];
		}
	}
	return merged;
}



console.log(merge([0,3,4,6,42], [4,5,11]));
console.log(merge2([0,3,4,6,42], [4,5,11]));