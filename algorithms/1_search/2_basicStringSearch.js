// function stringSearch(str, match){
// 	var count = 0;
// 	for(var i = 0; i < str.length; i++){
// 		for(var j = 0; j < match.length; j++){
// 			console.log(match[j], str[i+j]);
// 			if(match[j] !== str[i+j]){
// 				console.log("BREAK");
// 				break;
// 			}
// 			if(j === match.length - 1){
// 				console.log("FOUND ONE");
// 				count++;
// 			}
// 		}
// 	}
// 	return console.log(count);
// }

// function stringSearch(long, short){
// 	var count = 0;
// 	for(var i = 0; i < long.length; i++){
// 		for(var j = 0; j < short.length; j++){
// 			console.log(short[j], long[i+j]);
// 			if(short[j] !== long[i+j]){
// 				console.log('break');
// 				break;
// 			}
// 			if(j === short.length - 1){
// 				console.log('Found');
// 				count++;
// 			}
// 		}
// 	}
// 	return console.log(count);
// }

function stringSearch(long, short){
	var count = 0;
	for(var i = 0; i < long.length; i++){
		for(var j = 0; j < short.length; j++){
			if(short[j] !== long[i+j]) break;
			if(j === short.length - 1) count++;
		}
	}
	return console.log(count);
}

stringSearch('hellohehelkkg', 'll');