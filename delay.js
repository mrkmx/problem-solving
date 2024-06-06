function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const delayTime = 2000
function usefulFn() {
    console.log(`done in ${delayTime} ms`)
}
const res = delay(delayTime).then(() => usefulFn());
console.log(res); // Promise
