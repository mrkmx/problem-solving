Function.prototype.customBind = function(context, ...boundArgs) {
    const fn = this;
    return function(...innerArgs) {
        return fn.apply(context, [...boundArgs, ...innerArgs]);
    };
};
  
const obj = { value: 42 };
function getValue(msg) { return msg + this.value }

const customBoundFunction = getValue.customBind(obj, 'Value is: ');
const runtimeBoundFunction = getValue.bind(obj, 'Value is: ');
console.log('customBoundFunction', customBoundFunction());
console.log('runtimeBoundFunction', runtimeBoundFunction());
