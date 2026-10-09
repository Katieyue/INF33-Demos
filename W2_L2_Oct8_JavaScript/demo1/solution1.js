var array = [6, 2, 8, 1, 2, 5, 3];
console.log('Array is ' + array);

/*TODO:
- add a 4 to the end of the list and print it again
- calculate and print out the sum of all of the numbers in the array
- count how many even numbers are in the array
*/

array.push(4);
console.log('Array is now ' + array);

var sum = 0;

for(var i=0; i<array.length; i++) {
	sum += array[i];
}

console.log('Sum is ' + sum);

evens = 0;
for(var i=0;i<array.length; i++) {
	if(array[i] % 2 == 0) {
		evens += 1;
	}
}
console.log('There are ' + evens + ' even numbers in the array.');

