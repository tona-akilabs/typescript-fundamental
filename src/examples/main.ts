//1. Rest/Spread Properties for Objects
//  You can now use rest (...rest) and spread (...obj) with objects, not only arrays.

const user = { name: "Tona", age: 20, country: "Cambodia" };

const { ...rest } = user;
console.log(rest.name); // "Tona"
console.log(rest); // { age: 20, country: "Cambodia" }

const newUser = { ...user, city: "Phnom Penh" };
console.log(newUser);

//2. Asynchronous Iteration (for await...of)
   // Allows you to loop through async data sources.
import {fetchAsyncItems} from "./help";
async function run() {
    for await (const item of await fetchAsyncItems()) {
        const result = await item.json();
        console.log(result);
    }
}
// run()

//3. Promise.prototype.finally()
     // Runs regardless of success or failure.
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))
.finally(() => console.log("Done!"));

//4. New Regular Expression Features
     // a) RegExp Named Capture Groups
     // Give names to regex groups.
const regex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const result = regex.exec("2025-12-09");

if (result) {
    if (result.groups) {
        console.log(result.groups); //  { year: '2025', month: '12', day: '09' }
        console.log(result.groups.year); // 2025
        console.log(result.groups.month); // 12
        console.log(result.groups.day); // 09
    }
}

    // b) RegExp Unicode Property Escapes \p{...}
      // Now regex can match based on Unicode categories.
   console.log(/\p{Emoji}/u.test("😄")) // true


    // c) RegExp Lookbehind Assertions
      // Positive lookbehind:
   const lookbehind = /(?<=\$)\d+/.exec("$150")
   console.log(lookbehind) // [ '150', index: 1, input: '$150', groups: undefined ]
   console.log(lookbehind?.[0]) // 150

    // d) RegExp DotAll Mode (s flag)
      // . now matches newlines.
    const text = "Hello\nWorld";
    console.log(/Hello.World/s.test(text)); // true