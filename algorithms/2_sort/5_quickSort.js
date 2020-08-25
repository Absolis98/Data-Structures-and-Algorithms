function swap(arr, x, y){
	let tmp = arr[y];
	arr[y] = arr[x];
	arr[x] = tmp;
}

function pivot(arr, start = 0, end = arr.length - 1){
	let pivot = arr[start];
	let swapIndex = start;
	for(let i = start + 1; i <= end; i++){
		if(pivot > arr[i]){
			swapIndex++;
			swap(arr, swapIndex, i);
		}
	}
	swap(arr, start, swapIndex)
	return swapIndex;
}

pivot([5,2,6,7,4,8,22]);

function quickSort(arr, left = 0, right = arr.length - 1){
	if(left < right){
		let pivotIndex = pivot(arr, left, right);
		quickSort(arr, left, pivotIndex-1);
		quickSort(arr, pivotIndex+1, right);
	}
	return arr;
}

console.log(quickSort([3,5,11,34,534,1,34,63,54]))