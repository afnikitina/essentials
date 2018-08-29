// create an array
// let colors = new Array("cyan", "magent", "yellow", "balck");
// let myNums = [2,2,3,4,5,6,7,8];

// for (var item in myNums) {
// 	console.log(item + ": " + myNums[item]);
// }

// colors.forEach((item, i, arr) => {
// 	console.log(i + ": " + item);
// 	console.log(arr);
// });

// slice()

// splice()

// reduce()

//

// for (let i = 1; i <= 5; i++ ) {
// 	setTimeout(function() {
// 		console.log("i: " + i);
// 	}, i+1000);
// }

// for (let i = 1; i <= 5; i++) {
// 	(function(i) {
// 		setTimeout(function() {
// 			console.log("i: " + i);
// 		}, i*1000);
// 	})(i);
// }

// let c = 5/7;
// let d = 18/25;
// let theBiggest = function(a,b) {
// 	let result;
// 	a>b ? result = ["a", a] : result = ["b", b];
// 	console.log(result);
// }
//
// theBiggest(c,d);


// closure

function createFunction() {
	return (name => "Hello " + name);
}

let function1 = createFunction();

console.log(function1("Asya"));