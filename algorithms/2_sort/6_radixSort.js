function getDigit(num, i){
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//console.log(getDigit(3321, 3));

function digitCount(num){
	if(num === 0) return 1;
	return Math.ceil(Math.log10(Math.abs(num)));
}

//console.log(digitCount(333333));

function mostDigits(nums){
	let maxDigits = 0;
	for(let i = 0; i < nums.length; i++){
		maxDigits = Math.max(maxDigits, digitCount(nums[i]));
	}
	return maxDigits;
}

//console.log(mostDigits([5,54,54,5634]));

function radixSort(arr){
	let maxDigitCount = mostDigits(arr);
	for(let k = 0; k < maxDigitCount; k++){
		let digitBuckets = Array.from({length: 10}, () => []);
		for(let i = 0; i < arr.length; i++){
			let digit = getDigit(arr[i], k);
			digitBuckets[digit].push(arr[i]);
		}
		// concats all arguments in buckets into single arr
		// ... concats arr elements as single arguments, rather than arrs
		arr = [].concat(...digitBuckets);
	}
	return arr;
}


console.log(radixSort([4,6,8,15,47,10,0,64,16]));




// function getLength(num){
//   return Math.abs(num).toString().length
// }