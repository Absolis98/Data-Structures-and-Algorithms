function insertionSort(arr){
	for(var i = 1; i < arr.length; i++){
		var current = arr[i];
		for(var j = i-1; j >= 0 && arr[j] > current; j--) arr[j+1] = arr[j];
		arr[j+1] = current;
	}
	return console.log(arr);
}


insertionSort([20,8,11,22,18,4]);