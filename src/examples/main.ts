//1. BigInt
//A new primitive type for integers larger than Number.MAX_SAFE_INTEGER.
const big = 123456789012345678901234567890n;
console.log(big + 2n); // 123456789012345678901234567892n


//2. Dynamic import()
//Allows importing modules asynchronously and on demand.
import("./utils").then(module => {
    module.sayHello();
});

//3. Nullish Coalescing Operator ??
//Returns the right-hand value only if the left-hand value is null or undefined.
let user = null;
console.log(user ?? "Guest"); // "Guest"

//4. Optional Chaining Operator ?.
//Safely access nested properties without errors.
const user2 = {};
//console.log(user2.address?.street); // undefined (no error)

//5. Promise.allSettled()
//Resolves when all promises finish, regardless of success or failure.
Promise.allSettled([
    Promise.resolve(10),
    Promise.reject("Error")
]).then(result => console.log(result));


//6. globalThis
//A universal global object across environments.
//Browser → window
//Node.js → global
//Web Workers → self
//Use globalThis instead:
const key = "something";
// @ts-ignore
//globalThis.appGlobal ??= {};      // ensure it's initialized
// @ts-ignore
//globalThis.appGlobal[key] = 123;
// @ts-ignore
//console.log(globalThis.appGlobal[key]);

//7. for-in Mechanics Standardized
//Clarified property enumeration order (not new syntax, but standardized behavior).

//8. String.prototype.matchAll()
//Returns an iterator of all regex matches.
const text = "hello1 hello2";
const regex = /hello(\d)/g;

for (const match of text.matchAll(regex)) {
    console.log(match[0], match[1]);
}