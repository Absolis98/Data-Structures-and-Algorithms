function binarySearch(arr, val) {
	var start = 0;
	var end = arr.length - 1;
	var middle = Math.floor((start + end) / 2);
	while(arr[middle] !== val && start <= end){
		if (val < arr[middle]) end = middle - 1;
		else start = middle + 1;
		middle = Math.floor((start + end) / 2);
	}
	return arr[middle] === val ? console.log(middle) : console.log(-1);
}





// function binarySearch(arr, val) {
// 	let start = 0;
// 	let end = arr.length -1;
// 	let middle = Math.floor((start + end) / 2);

// 	while(arr[middle] !== val && start <= end){
// 		if (val < arr[middle]){
// 			end = middle -1;
// 		}else start = middle + 1;
// 		middle = Math.floor((start + end) / 2);
// 	}
// 	if (val === arr[middle]){
// 		console.log(middle);
// 		return middle;
// 	} 
// 	console.log(-1);
// 	return -1;
// }

binarySearch([0,5,9,11,12,13,15,18,20,31,41,44], 12);
