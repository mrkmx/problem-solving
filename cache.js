const { performance } = require('perf_hooks');

(async function () {
    let cache = new Map()

    async function getUser(id) {
        if (cache.has(id)) {
            return cache.get(id)
        }
        const url = 'https://jsonplaceholder.typicode.com/users/' + id
        const user = await fetch(url).then(response => response.json())
        cache.set(id, user)
        return cache.get(id)
    }

    const start = performance.now();
    await getUser(1)
    await getUser(1)
    await getUser(1)
    await getUser(1)
    await getUser(1)
    await getUser(1)
    await getUser(1)
    await getUser(1)
    await getUser(1)
    const end = performance.now();
    console.log(`${end - start}ms.`);
    console.log(cache);
})()
