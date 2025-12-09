import {asyncRequestApi, requestApi} from "./request";

const promise = new Promise((resolve, reject) => {
    const success = false;

    if (success) {
        resolve("Operation success!");
    } else {
        reject("Operation failed!");
    }
});

// Using .then() and .catch()
promise
    .then(result => {
        console.log(result); // "Operation success!"
    })
    .catch(error => {
        console.error(error);
    });

// Using Promise with async/await (modern way)
async function run() {
    try {
        const result = await promise;
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

run();
requestApi()
console.log(asyncRequestApi())
asyncRequestApi().then(result => {
    console.log(result);
})

async function execute() {
    const result = await asyncRequestApi()
    console.log(result);
}
execute()