function throttle(fn, threshold) {
  let wait = false
  return function(...args) {
    if (!wait) {
      fn.apply(this, args)
      wait = true
      setTimeout(() => {
        wait = false
      }, threshold)
    }
  }
}

function log(msg) {
  console.log(msg)
}

const throttledLog = throttle(log, 2000)

window.addEventListener('scroll', () => throttledLog('throttled scrolling'))
window.addEventListener('scroll', () => log('regular scrolling'))