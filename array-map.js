Array.prototype.customMap = function(callback) {
    // callback - [Function: average]
    // this - the array map() was called upon.
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this));
    }
    return newArray;
  };
  
  
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const positive = (num) => num > 0
const average = (num, idx, arr) => {
    const prev = arr[idx - 1];
    const next = arr[idx + 1];
    let count = 1;
    let total = num;
    if (prev !== undefined) {
      count++;
      total += prev;
    }
    if (next !== undefined) {
      count++;
      total += next;
    }
    const average = total / count;
    return Math.round(average * 100) / 100;
}

console.log(numbers.filter(positive).customMap(average)); // [2, 2.67, 2, 3.33, 5, 5.33, 5.67, 4]