function counter (arr, add) {
newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(arr[i] + add);
		}
	return newArr;
	}
console.log(counter([5,0,4], 5));


function counter (arr, add) {
 return arr.map(a => a + add);
	}
console.log(counter([5,0,4], 10));

function counter(arr, criteria) {
		return arr.filter( a => a > criteria);
}
console.log(counter([5,0,4], 1));
