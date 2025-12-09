//1. Array.prototype.flat()
//  Flattens nested arrays.

console.log([1, [2, [3]]].flat());      // [1, 2, [3]]
console.log([1, [2, [3]]].flat(2));     // [1, 2, 3]

//2. Array.prototype.flatMap()
// Maps each element, then flattens one level.
console.log([1, 2, 3].flatMap(x => [x, x * 2])); // // [1, 2, 2, 4, 3, 6]

//3. Object.fromEntries()
// Converts key–value pairs into an object (reverse of Object.entries()).
console.log(Object.fromEntries([['a', 1], ['b', 2]]));

//4. String trimming: trimStart() and trimEnd()
// (Also available as aliases trimLeft() and trimRight()).
console.log("   hi".trimStart()); // "hi"
console.log("hi   ".trimEnd()); // "hi"

//5. Optional catch binding
//No need to write catch (e) if you don't use the error.
try {
    throw new Error("Oops");
} catch {
    console.log("Error happened!");
}

//6. Symbol.prototype.description
//Access the description string of a Symbol.
const s = Symbol("my symbol");
console.log(s.description); // "my symbol"

//7. Well-defined JSON Stringify behavior
//ES2019 fixed edge cases for:

//8. Revised Function toString()
function test() { /* comment */ }
console.log(test.toString());