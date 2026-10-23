/*
Task:
 - Create a webpage in Node which returns the "students" feld of the "133_class.json" file as a comma-separated list.
*/

var http = require('http');
var fs = require('fs'); 
var server = http.createServer((req, res) => {
	console.log('here');
	res.writeHead(200);
	res.end("<strong>Bold text</strong>");
}); 
server.listen(8080);