// -------------------- Document ready: JavaScript  --------------------
// this creates an anonymous function that's called whenever the page finishes loading
//  document.addEventListener allows us to create functions that are called upon certain events
//  the 'DOMContentLoaded' event happens when the page is finished loading
document.addEventListener('DOMContentLoaded', function (event) {
    // -------------------- Selecting elements 1 -------------------- 
	//element with id="foo"
    var fooElem = document.getElementById('foo');
    console.log(fooElem.innerHTML);

    //elements with class="row"
    var rowElems = document.getElementsByClassName('row');

    //<li> elements
    var liElems = document.getElementsByTagName('li'); 

    // -------------------- Selecting elements 2 -------------------- 
    /*easiest to select by reusing CSS selectors! */
    var cssSelector = '.selectExample > p';

    //selects FIRST element that matches css selector
    var elem = document.querySelector(cssSelector);

    //matches ALL elements that match css selector
    var elems = document.querySelectorAll(cssSelector);
    elems.forEach((elem) => {
        console.log(elem.innerHTML);
    });

    // -------------------- Editing elements 1 -------------------- 
    /* properties to access the CONTENT of the element */

    var elem = document.querySelector('p.queryTest');

    elem.textContent = "I'm different!"; //change the content

    elem.innerHTML = "I'm <strong>different</strong>";

    var parent = elem.parentNode; //get the parent node

    // -------------------- Editing elements 2 -------------------- 
    var elements = document.getElementsByTagName("h1");
	for(var i = 0; i < elements.length; i++) {
		elements[i].classList.add("title");
		elements[i].style.color="blue";
	}

    // -------------------- Changing the DOM -------------------- 
    //create a new <p> (not yet in the tree)
    var newP = document.createElement('p');
    newP.textContent = "I'm new!";

    //create Node of textContent only
    var newText = document.createTextNode("I'm blank");

    var div = document.querySelector('div#container');
    div.appendChild(newP); //add element INSIDE (at end)
    // div.appendChild(newText);

    //add node BEFORE element (new, old)
    // div.insertBefore(document.createTextNode("First!"), newP);

    //replace node (new, old)
    // div.replaceChild(document.createTextNode('boo'), newText);

    //remove node
    // div.removeChild(div.querySelector('p'));

    // -------------------- Listeners (1) -------------------- 
    //respond to "click" events
    var elem = document.getElementById('buttonTest');

    //often use an anonymous callback function
    elem.addEventListener('click', function(){
        console.log('clicky clicky!');
    });

    // -------------------- Listeners (2) -------------------- 
    elem.addEventListener('click', function(event) {
        console.log('You clicked me!');

        // get what was clicked
        var clickedElem = event.target;
        console.log(clickedElem);
    });
});