function debounce(fn, delay) {
    let timeoutId
    return function(...args) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

function log(msg) {
    console.log(msg)
}

const debouncedLog = debounce(log, 1000)

window.addEventListener('scroll', () => debouncedLog('debounced scrolling'))
window.addEventListener('scroll', () => log('regular scrolling'))