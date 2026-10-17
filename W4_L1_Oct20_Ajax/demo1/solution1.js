/*TODO:
 - Use a promise to print "Hello from the future!" 5 seconds after the JavaScript loads by sending the string back as the result of a promise.
 - A Promise is an object that represents the eventual completion (or failure!) of an async operation
 - There's no fetch() requests being made here; mainly just demonstrating the usage of .then() to do something after a Promise completes
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