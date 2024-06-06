Promise.customAll = function(promises) {
    return new Promise((resolve, reject) => {
        let counter = 0
        const results = []
        promises.forEach((promise, idx) => {
            Promise
                .resolve(promise) // You can pass not only promises in .all() method
                .then(result => {
                    results[idx] = result
                    counter++
                    
                    if (promises.length === counter) {
                        resolve(results)
                    }
                })
                .catch(error => reject(error))
        })
    })

}

const rs1 = () => new Promise(resolve => setTimeout(() => resolve(1), 300))
const rs2 = () => new Promise(resolve => setTimeout(() => resolve(2), 200))
const rj = () => new Promise((_, reject) => setTimeout(() => reject(3), 100))

Promise.customAll([rs1(), rs2(), 4])
    .then(result => console.log('then', result))
    .catch(err => console.error('catch', err));

Promise.customAll([rs1(), rs2(), rj()])
    .then(result => console.log('then', result))
    .catch(err => console.error('catch', err));