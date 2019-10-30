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

let newArr = oldArr.filter((item) => {return item != null}):

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

Concat
Array.concat(array)

Concats the first array (or string) to the second array (or string)

Some - Returns Bolean (true/ false) if any item in a array meets a criteria
Array.some(callback)

Every - Returns Bolean (true/ false) if alll items in a array meets a criteria
Array.every(callback)

Regular Expression (Regex)
A regular expression is an object

Regular expression literal
var regexLiteral = /cat/;

Regular expression constructor
var regexConstructor = new RegExp("cat");

Symbols
. — (period) Matches any single character, except for line breaks.
* — Matches the preceding expression 0 or more times.
+ — Matches the preceding expression 1 or more times.
? — Preceding expression is optional (Matches 0 or 1 times).
^ — Matches the beginning of the string.
$ — Matches the end of the string.

Character groups
\d — Matches any single digit character.
\w — Matches any word character (alphanumeric & underscore).
[XYZ] — Character Set: Matches any single character from the character within the brackets. You can also do a range such as [A-Z]
[XYZ]+ — Matches one or more of any of the characters in the set.
[^A-Z] — Inside a character set, the ^ is used for negation. In this example, match anything that is NOT an uppercase letter.

Flags:
There are five optional flags. They can be used separately or together and are placed after the closing slash. Example: /[A-Z]/g I’ll only be introducing 2 here.
g — Global search
i — case insensitive search

Advanced
(x) — Capturing Parenthesis: Matches x and remembers it so we can use it later.
(?:x) — Non-capturing Parenthesis: Matches x and does not remembers it.
x(?=y) — Lookahead: Matches x only if it is followed by y.
