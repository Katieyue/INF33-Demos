/*TODO:
 - Use a promise to print "Hello from the future!" 5 seconds after the JavaScript loads by sending the string back as the result of a promise.
*/

function resolvePromise(resolve, reject) {
    function resolveTimeout() {
        resolve("Hello from the future");
    }
    setTimeout(resolveTimeout, 5000);
}

var ourPromise = new Promise(resolvePromise);

console.log("Hello from the present!");

function responseFunction(response) {
    console.log(response);
}

ourPromise.then(responseFunction);