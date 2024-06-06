Promise.customRace = function(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            Promise
                .resolve(promise)
                .then(result => resolve(result))
                .catch(err => reject(err))
        })
    })
}

const rs1 = () => new Promise(resolve => setTimeout(() => resolve(1), 300))
const rs2 = () => new Promise(resolve => setTimeout(() => resolve(2), 200))
const rj = () => new Promise((_, reject) => setTimeout(() => reject(new Error(3)), 100))


Promise.customRace([ rs1(), rs2(), rj()])
    .then(result => console.log('then', result))
    .catch(err => console.error('catch', err));

