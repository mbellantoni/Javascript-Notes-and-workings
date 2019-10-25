# hello-world
tutorial depository

random notes on Javascript
!= Does not equal operater
(condition statement) ? (value if true) : (value if false) alternate to if else statement
.push add to the end of an array
.split(seperator,limit) seperate a string into seperate arrays based on criteria
let set variable

for (let i=0; i < array.length; i++)
for loop (defined variable; condition for how long the loop will occur; variable change)

if (x > 10) {return x * 5}
if (condition statement)

.slice(beginning element, ending element) returns a new array containing beginning at the first element of the arrary and end at (but not including) the ending element



Filter
let newArr = oldArr.filter(callback);

newArr — the new array that is returned
oldArr — the array to run the filter function on
callback — the function used to test each element of the oldArr. Returning true keeps the element, returning false to not keep it.

Our callback function can take three arguments:
element — the current element of the array
index — the current index of the value being processed
arr — the original array

Map
let newArr = oldArr.map((val, index, arr) => {
  // return element to new Array
});
newArr — the new array that is returned
oldArr — the array to run the map function on
val — the current value being processed
index — the current index of the value being processed
arr — the original array

Reduce
let result = arr.reduce(callback);
// Optionally, you can specify an initial value
let result = arr.reduce(callback, initValue);

result — the single value that is returned.
arr — the array to run the reduce function on.

callback — the function to execute on each element in the array.
initValue — an optionally supplied initial value. If this value is not supplied, the 0th element is used as the initial value.

Our callback function can take four arguments. You will recognize three of the arguments from the map() and filter() methods. The new argument is the accumulator.
accumulator — the accumulator accumulates all of the callbacks returned values.
val — the current value being processed
index — the current index of the value being processed
arr — the original array
