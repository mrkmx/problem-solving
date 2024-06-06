Promise.customAny = function(promises) {
    return new Promise((resolve, reject) => {
        let counter = 0
        const errors = []

        promises.forEach((promise, idx) => {
            Promise
                .resolve(promise)
                .then(result => {
                    resolve(result)
                })
                .catch(err => {
                    errors[idx] = err
                    counter++
                    if (promises.length === counter) {
                        reject(new AggregateError(errors, 'All promises were rejected'))
                    }
                    
                })
        })
    })
}

const rs1 = () => new Promise(resolve => setTimeout(() => resolve(1), 300))
const rs2 = () => new Promise(resolve => setTimeout(() => resolve(2), 200))
const rj = () => new Promise((_, reject) => setTimeout(() => reject(3), 100))


Promise.customAny([rs1(), rs2(), rj()])
    .then(result => console.log('then', result))
    .catch(err => console.error('catch', err));