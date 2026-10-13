/*
	- After 1 second, add the "title" class to the h1 tag and change its color to blue.
	- After 2 seconds, change the text of the first paragraph (id "first") to "Lorem ipsum amet".
	- After 3 seconds, add a new paragraph to the div (id "body") with the text "A new paragraph!"
*/

// see setup1.html : <body onload="runJS()">
function runJS() {
	setTimeout(makeTitleBlue, 1000);

	setTimeout(addLoremIpsum, 2000);

	setTimeout(addNewParagraph, 3000);
}

function makeTitleBlue () {
	var h1Tags = document.getElementsByTagName('h1');
	// interesting note: HTMLCollection, which getElementsByTagName returns, does NOT have a foreach() method
	// but NodeList, which querySelector returns, does
	for(var i = 0; i< h1Tags.length; i++) {
		h1Tags[i].classList.add('title');
		h1Tags[i].style.color = 'blue';
	}
}

function addLoremIpsum () {
	var firstTag = document.getElementById('first');
	firstTag.textContent = 'Lorem ipsum';
}

function addNewParagraph () {
	var div = document.getElementById('body');
	var newEl = document.createElement('p');
	newEl.textContent = 'A new paragraph';
	newEl.classList.add('title');
	div.appendChild(newEl);
}