Promise.customAllSettled = function(promises) {
    return new Promise((resolve) => {
        const results = []
        let counter = 0

        promises.forEach((promise, idx) => {
            Promise
                .resolve(promise)
                .then(value => {
                    results[idx] = {status: 'fulfilled', value}
                })
                .catch(reason => {
                    results[idx] = {status: 'rejected', reason}
                })
                .finally(() => {
                    counter++
                    if (promises.length === counter) {
                        resolve(results)
                    }
                })
        })
    })
}

const rs1 = () => new Promise(resolve => setTimeout(() => resolve(1), 300))
const rs2 = () => new Promise(resolve => setTimeout(() => resolve(2), 200))
const rj = () => new Promise((_, reject) => setTimeout(() => reject(3), 100))


Promise.customAllSettled([ rs1(), rs2(), rj()])
    .then(result => console.log('runtime then', result))
    .catch(err => console.error('runtime catch', err));

