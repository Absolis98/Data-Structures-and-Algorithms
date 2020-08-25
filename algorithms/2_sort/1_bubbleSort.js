// naive way, unecessary comparisons
// function bubbleSort(arr){
// 	for(var i = 0; i < arr.length; i++){
// 		for(var j = 0; j < arr.length; j++){
// 			console.log(arr[j], arr[j+1]);
// 			if(arr[j] > arr[j+1]) swap(arr, j, j+1);
// 		}
// 	}
// 	return console.log(arr);
// }

//more efficient because the largest number will always bubble to the top
//you won't ever swap the last number on the second iteration, so this
//fix will do exacly that. So there will be 1 less check per iteration.
// ex. 5 checks, 4 checks, 3 checks, 2 checks, 1 check
//does not have a short circuit
// function bubbleSort(arr){
// 	for(var i = arr.length; i > 0; i--){
// 		for(var j = 0; j < i - 1; j++){
// 			console.log(arr[j], arr[j+1]);
// 			if(arr[j] > arr[j+1]) swap(arr, j, j+1);
// 		}
// 		console.log('one pass complete');
// 	}
// 	return console.log(arr);
// }

function swap(arr, idx1, idx2){
	var temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
}

// if no swap is made, break from the loop and return array
function bubbleSort(arr){
	var noSwaps;
	for(var i = arr.length; i > 0; i--){
		noSwaps = true;
		for(var j = 0; j < i - 1; j++){
			console.log(arr[j], arr[j+1]);
			if(arr[j] > arr[j+1]){
				swap(arr, j, j+1);
				noSwaps = false;
			} 
		}
		if(noSwaps) break;
		console.log('one pass complete');
	}
	return console.log(arr);
}



bubbleSort([37,45,29,8,12,-8,100]);