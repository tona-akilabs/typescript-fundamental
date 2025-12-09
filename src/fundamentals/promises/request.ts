
export function requestApi() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => {
            console.error(error);
        })
}

export const asyncRequestApi = async () => {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        // throw Error('Not Found')
        // console.log(result.json())
        // console.log(result)
        return result.json()
    } catch (e) {
        console.error(e);
    }
    return null
}