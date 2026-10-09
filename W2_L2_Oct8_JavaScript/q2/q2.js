var numbers = [1, 5, 10, 30, 6, 500];

// ----- A ------
var max = Number.NEGATIVE_INFINITY;

numbers.forEach(function(num) {
	if(num > max) {
		max = num;
	}
});

console.log(`A: ${max}`);


// ----- B ------
var max = numbers.reduce(function(max, num) {
	if(num > max) {
		max = num;
	}
	return max;
}, Number.NEGATIVE_INFINITY);

console.log(`B: ${max}`);


// ----- C ------
var max = Number.NEGATIVE_INFINITY;

for(var i=0;i < numbers.length; i++) {
	if(num > max) {
		max = num;
	}
}

console.log(`C: ${max}`);