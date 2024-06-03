class EventEmitter {
    constructor() {
        this.listeners = new Map()
    }
    on(event, cb, once = false) {
        if (!this.listeners.has(event)) {
            this.listeners.set(
                event,
                {
                    callbacks: new Set, // use Set to register callback once
                    once,
                }
            )
        }
        this.listeners.get(event).callbacks.add(cb)
        
        return this // support chaining
    }
    once(event, cb) {
        const once = true
        this.on(event, cb, once)
    }
    off(event, cb) {
        if (!this.listeners.has(event)) return

        this.listeners.get(event).callbacks.delete(cb)
        
        return this
    }
    // TODO: check use cases for args and chaining, it looks dumb
    emit(event, ...args) {
        // check unregistered event
        if (!this.listeners.has(event)) return
        
        const {callbacks, once} = this.listeners.get(event)
        for (const cb of callbacks) {
            // support callback args 
            cb(...args)
        }

        if (once) {
            this.listeners.delete(event)
        }

        return this
    }
}

const emitter = new EventEmitter()

function one () {console.log('one')}
function two () {console.log('two')}
function three () {console.log('three')}
function doubleAndPrint (num, str) {console.log(num * 2, str)}

emitter.on('run', one)
emitter.on('run', two)
emitter.on('run', two)
emitter.on('run', three)
emitter.on('run', doubleAndPrint)
emitter.off('run', three)

emitter.on('chain', three)
       .on('chain', two)
       .on('chain', one)
       .on('other', doubleAndPrint)
       .emit('other', 5 ,7)

emitter.emit('run', 5, 7)
emitter.emit('chain')

emitter.once('onlyOnce', two)
emitter.emit('onlyOnce')
emitter.emit('onlyOnce')
emitter.emit('onlyOnce')
