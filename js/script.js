//Array Content Manipulation
/*
//To get a subarray from an array use slice; the original array is unmodified
//slice takes up two arguments: the first is where the subarray begins, the second is where it ends (up to)
const arr = [1, 2, 3, 4, 5];
const newArr = arr.slice(-2);
console.log(newArr);

// splice does in-place modification
// the first argument is where to start modifying, the second - is the number of elements to remove, the rest - what to add
arr.splice(1, 2, 'a', 'b');
console.log(arr);

//cutting and replacing withing an array by using copyWithin
// the first argument is the target, the second - is where to start copying from, and the final - is where to stop copying from (up to)
const arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr2);

arr2.copyWithin(0, -4, -1);
console.log(arr2);
*/
/*
// filling an array with a specific value
const arr3 = new Array(5).fill(1);
console.log(arr3);
arr3.fill('a');
console.log(arr3);
arr3.fill('b', 2, 4);
console.log(arr3);
arr3.fill('c', -3, -1);
console.log(arr3);
arr3.filter(x => x === 'a');
const newArr3 = arr3.filter(x => x === 'a');
console.log(newArr3);
console.log(arr3);

const arr4 = [1,2,3,4,5,6,7,8,9,10];
const sum = arr4.reduce((a,x) => a += x, 0);
console.log(sum);

const words = ["Scope", "in", "JavaScript", "is", "lexical", "meaning", "that", "we", "can", "determine", "what",
	"variables", "are", "in", "scope", "simply", "by", "looking", "at", "the", "source", "code"];
const alphabetical = words.reduce((a, x) => {
	if (!a[x[0]]) a[x[0]] = [];
	a[x[0]].push(x);
	return a; }, {});
console.log(alphabetical);
*/
/*
// pass a function into a function
function sum(arr, f) {
	if (typeof f !== 'function')
		f = x => x;
	return arr.reduce((a,x) => a += f(x), 0);
}
let result;

result = sum([1,2,3]);
console.log(result);

result = sum ([2,4,6,8], x => x*x);
console.log(result);

result= sum ([3,4,5,6,7], x => Math.pow(x, 4));
console.log(result);
*/
/*
class Log {
	constructor() {
		this.messages = [];
	}
	add(currMsg) {
		this.messages.push({message: currMsg, timestamp: Date.now()});
		//console.log(this.messages);
	}
	// add a Symbol.iterator method to provide the iteration protocol
	[Symbol.iterator]() {
		let i = 0;
		const myMessages = this.messages;
		return {
			next() {
				if (i >= myMessages.length)
					return { value: undefined, done: true};
				return {value: myMessages[i++], done: false};
			}
		}

	}
}

const myLog = new Log();
myLog.add("Today is Monday");
myLog.add("I have a long to-do list");
myLog.add("Nothing has been done");

//console.log(`${myLog.messages[0].message} @ $myLog.messages[0].timestamp}`);
for (let entry of myLog) {
	console.log(`${entry.message} @ ${entry.timestamp}`);
}
*/
/*
function* rainbow() {
	yield 'red';
	yield 'orange';
	yield 'yellow';
	yield 'green';
	yield 'blue';
	yield 'indigo';
	yield 'violet';
}

const it = rainbow();
//console.log(it.next().value);
for (let color of rainbow()) {
	console.log(color);
}
*/

function* interrogate() {
	const name = yield "What is your name?";
	const color = yield "What is your favorite color?";
	return `${name}'s favorite color is ${color}.`;
}

const it = interrogate();
console.log(it.next());
console.log(it.next('Paul'));
console.log(it.next('red'));

