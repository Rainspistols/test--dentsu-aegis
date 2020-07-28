// [1,2,3,4].duplicate().
// Spraw żeby powyższy kod zwrócił: [1,2,3,4,1,2,3,4]

// return a new array
Array.prototype.dublicate = function () {
  return [...this, ...this];
};

console.log('TASK2.1 CALL1', [1, 2, 3, 4].dublicate());
console.log('TASK2.1 CALL2', [(1, 2, 3, 4)].dublicate());

// return mutted current array
Array.prototype.dublicate = function () {
  const len = this.length;
  for (let i = 0; i < len; i++) {
    this[len + i] = this[i];
  }
  return this;
};

var x = [1, 2, 3, 4];
console.log('TASK2.2 CALL1', x.dublicate());
console.log('TASK2.2 CALL2', x.dublicate());
