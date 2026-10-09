var array = ['1', 'fish', 2, 'blue'];

array[5] = 'dog';
console.log(array);

array.push('2');
console.log(array);

array[2] = array[array.length - 1] - 4;
console.log(array);

array[0] = typeof array[2];
console.log(array);

array[4] = array.indexOf('blue');
console.log(array);

console.log(array.join('*'));