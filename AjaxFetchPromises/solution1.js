/*TODO:
 - Use a promise to print "Hello from the future!" 5 seconds after the JavaScript loads by sending the string back as the result of a promise.
*/

var hello = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Hello from the future!");
	}, 5000);
});

console.log("Hello from the present!");

hello.then((text) => {
	console.log(text);
});