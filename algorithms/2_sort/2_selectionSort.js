

// function selectionSort(arr){
// 	for(var i = 0; i < arr.length; i++){
// 		var min = i;
// 		for(var j = i+1; j < arr.length; j++){
// 			// console.log(i, j);
// 			if(arr[min] > arr[j]){
// 				min = j;			
// 			}
// 		}
// 		if(i !== min){
// 			console.log(min, i);
// 			swap(arr, min, i);
// 		}
// 	}
// 	return console.log(arr);
// }

function swap(arr, i1, i2){
	var tmp = arr[i1];
	arr[i1] = arr[i2];
	arr[i2] = tmp;
}

function selectionSort(arr){
	for(var i = 0; i < arr.length; i++){
		var min = i;
		for(var j = i+1; j < arr.length; j++){
			if(arr[min] > arr[j]) min = j;
		}
		if(i !== min) swap(arr, min, i);
	}
	return console.log(arr);
}


selectionSort([0,2,34,22,10,19,17]);