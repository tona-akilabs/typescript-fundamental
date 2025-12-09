
export const fetchAsyncItems = async () => {
    /*return [
        await fetch("https://jsonplaceholder.typicode.com/posts/1"),
        await fetch("https://jsonplaceholder.typicode.com/posts/1"),
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
    ];*/
    return Promise.all([
        await fetch("https://jsonplaceholder.typicode.com/posts/1"),
        await fetch("https://jsonplaceholder.typicode.com/posts/1"),
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
    ])
}