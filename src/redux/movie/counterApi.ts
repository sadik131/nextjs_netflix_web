export function fetchApi() {
    return new Promise(async (resolve) => {
        const responce = await fetch("/api")
        const data = responce.json()
        resolve({ data })
    })
}
