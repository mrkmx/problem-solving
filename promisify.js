// TODO: it looks useless. Try to find a real sync API with a callback and promisify it.
function promisify(fn) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            try {
                const result = fn(...args)
                resolve(result)
            } catch (error) {
                reject(error)
            }
            
        })
    }
}
