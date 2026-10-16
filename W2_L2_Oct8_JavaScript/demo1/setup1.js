var array = [6, 2, 8, 1, 2, 5, 3];
console.log("Array is " + array);

/*TODO:
[x] add a 4 to the end of the list and print it again
[ ] calculate and print out the sum of all of the numbers in the array
[ ] count how many even numbers are in the array
*/

array.push(4); // what's wrong with this...?
console.log(array);

var sum = 0;
var evenCount = 0;
for (var i = 0; i < array.length; i++) {
  sum += array[i];

  if (array[i] % 2 == 0) evenCount++;
}

console.log("sum is " + sum);
console.log(`even count is ${evenCount}`);
