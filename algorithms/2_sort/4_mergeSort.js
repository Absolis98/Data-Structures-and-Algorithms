// function merge(arr1, arr2){
// 	let result = [];
// 	let i = 0;
// 	let j = 0;
// 	//first loop only applies while both arrays are being compared at the same time
// 	while(i < arr1.length && j < arr2.length){
// 		if(arr2[j] >= arr1[i]){
// 			result.push(arr1[i]);
// 			i++;
// 		}else{
// 			result.push(arr2[j]);
// 			j++;
// 		}
// 	}
// 	//once we hit the end of the shortest array, the while loop above will finish
// 	//the bottom code will add the remaining numbers into the result array
// 	while(i < arr1.length){
// 		result.push(arr1[i]);
// 		i++;
// 	}
// 	while(j < arr2.length){
// 		result.push(arr2[j]);
// 		j++;
// 	}

// 	return result;
// }

function merge(arr1, arr2){
	let result = [];
	let i = 0;
	let j = 0;
	while(i < arr1.length && j < arr2.length){
		if(arr1[i] <= arr2[j]) result.push(arr1[i++]);
		else result.push(arr2[j++]);
	}
	while(i < arr1.length) result.push(arr1[i++]);
	while(j < arr2.length) result.push(arr2[j++]);

	return result;
}

function mergeSort(arr){
	if(arr.length <= 1) return arr;
	let mid = Math.floor(arr.length/2);
	let left = mergeSort(arr.slice(0,mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
}

console.log(mergeSort([10,44,52,112,4,2,5,6,6,4,234,3,4,54,5,345,45,2,4,2,8,77]));



// function merge(arr1, arr2){
// 	let result = [];
// 	let i = 0;
// 	let j = 0;
// 	while(i < arr1.length && j < arr2.length){
// 		if(arr2[j] >= arr1[i]) result.push(arr1[i++]);
// 		else result.push(arr2[j++]);
// 	}
// 	while(i < arr1.length){
// 		result.push(arr1[i++]);
// 	}
// 	while(j < arr2.length){
// 		result.push(arr2[j++]);
// 	}
// 	return result;
// }


// Cleaner but abstract solutions for merge

// const merge = (arr1, arr2) => {
//     let res = [];        
//     while(arr1.length > 0 && arr2.length > 0){
//         if (arr1[0] > arr2[0]){
//             res.push(arr2.shift())
//         } else {
//             res.push(arr1.shift())
//         }
//     }
//     res = res.concat(arr1).concat(arr2)
//     return res
// }

// const merge = (arr1, arr2) => {
//   const arr = [];
 
//   let i = 0, j = 0;
//   while (arr1.length > i || arr2.length > j) {
//     if (arr1[i] <= arr2[j]) arr.push(arr1[i++]);
//     else if (arr1[i] > arr2[j]) arr.push(arr2[j++]);
//     else if (i in arr1) arr.push(arr1[i++]);
//     else arr.push(arr2[j++]);
//   }
//   return arr;
// }