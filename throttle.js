// main goal - reduce the timeout time by "limit - timeSinceLastCall"
function throttle(fn, limit) {
    let timeoutId;
    let lastCall;
    
    return function(...args) {
        const now = Date.now()
        if (!lastTime) {
            fn.apply(this, args)
            lastTime = now
        } else {
            const timeSinceLastCall = now - lastCall
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
                if (timeSinceLastCall > limit) {
                    fn.apply(this, args)
                    lastCall = now
                }
            }, limit - timeSinceLastCall)
        }
    }
}

function log(msg) {
    console.log(msg)
}

const throttledLog = throttle(log, 2000)

window.addEventListener('scroll', () => throttledLog('throttled scrolling'))
window.addEventListener('scroll', () => log('regular scrolling'))