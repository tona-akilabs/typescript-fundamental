
//1. String.prototype.replaceAll
//Allows replacing all occurrences of a substring without using regex.
const result = "hello world world".replaceAll("world", "Tona");
console.log(result); // // "hello Tona Tona"

//2. Logical Assignment Operators
//These combine logical operators (&&, ||, ??) with assignment.
//a. ||= (Logical OR assignment)
//Assigns if the variable is falsy.
let a = 0;
a ||= 5;
console.log(a); // a = 5

//b. &&= (Logical AND assignment)
//Assigns if the variable is truthy.
let b = 10;
b &&= 20;
console.log(b); // b = 20

//c. ??= (Nullish coalescing assignment)
//Assigns only if the variable is null or undefined.
let c = null;
c ??= 50;
console.log(c); // c = 50

//3. Numeric Separators (_)
//Improves readability of long numbers.
let num = 1_000_000;
let hex = 0xFF_FF;
let binary = 0b1010_0101;
console.log(num);
console.log(hex);
console.log(binary);

//4. Promise.any()
//Resolves as soon as any one promise fulfills (opposite of Promise.race() when promises reject).

Promise.any([
    Promise.reject("err"),
    Promise.resolve("success"),
]).then(console.log); // "success"

//5. WeakRef
//Allows holding a weak reference to an object (does NOT prevent garbage collection).
let obj = { name: "Tona" };
let weak = new WeakRef(obj);

console.log(weak.deref()); // { name: "Tona" }

//6. FinalizationRegistry
//Lets you run cleanup code after an object is garbage collected.
const registry = new FinalizationRegistry((value) => {
    console.log(value, "was cleaned up");
});
registry.register({}, "MyObject");