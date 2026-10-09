console.log("Hello, world!");


console.log("------------- JavaScript variables --------------");
var hoursSlept;
console.log(hoursSlept);
//hoursSlept = 2; // try uncommenting this
hoursSlept += 2;
console.log(hoursSlept);

console.log("------------- JavaScript types --------------");

console.log('40' + 2); //'402'
console.log('40' - 4); //36

var num = 10;
var str = '10';

//comparisons: these will all be booleans (true/false)
console.log(num == str); //true
console.log(num === str); //false
console.log('' == 0); //true

console.log("------------- JavaScript loops and conditionals --------------");

var i = 4.4;

if(i > 5) {
	console.log('i is bigger than 5');
} else if(i >= 3) {
	console.log('i is between 3 and 5');
} else {
	console.log('i is less than 3');
}

for(var x = 0; x < 5; x++) {
	console.log(i);
}

console.log("------------- JavaScript methods --------------");

var className = 'in4matx 133';
console.log(className);

className = className.toUpperCase();
console.log(className);

var part = className.substring(1, 4);
console.log(part);

console.log(className.indexOf('MATX') >= 0); //whether the substring appears

console.log("------------- JavaScript string formatting --------------");

console.log(`the class name is: ${className}`);

console.log("------------- JavaScript arrays (1) --------------");

var letters = ['a', 'b', 'c'];
var numbers = [1, 2, 3];
var things = ['raindrops', 2.5, true, [5, 9, 8]]; //arrays can be nested
var empty = [];
var blank5 = new Array(5); //empty array with 5 items

//access using [] notation like Java
console.log( letters[1] ); //=> "b"
console.log( things[3][2] ); //=> 8

//assign using [] notation like Java
letters[0] = 'z';
console.log( letters ); //=> ['z', 'b', 'c']

//assigning out of bounds automatically grows the array
letters[10] = 'g';
console.log( letters); 
    //=> [ 'z', 'b', 'c', , , , , , , , 'g' ]
console.log( letters.length ); //=> 11

console.log("------------- JavaScript arrays (2) --------------");

//Make a new array
var array = ['i','n','f','x'];

//add item to end of the array
array.push('133');
console.log(array); //=> ['i','n','f','x','133']

//combine elements into a string
var str = array.join('-');
console.log(str); //=> "i-n-f-x-133"

//get index of an element (first occurrence)
var oIndex = array.indexOf('x'); //=> 3

//remove 1 element starting at oIndex
array.splice(oIndex, 1);
console.log(array); //=> [‘i','n','f','133']

console.log("------------- JavaScript objects --------------");

ages = {alice:40, bob:35, charles:13}
extensions = {'daniel':1622, 'in4matx':9937}
num_words = {1:'one', 2:'two', 3:'three'}
things = {num:12, dog:'woof', list:[1,2,3]}
empty = {}
empty = new Object(); //empty object

console.log("------------- Accessing object properties (1) --------------");

//access ("look up") values
console.log( ages['alice'] ); //=> 40
console.log( ages['bob'] ); //=> 35
console.log( ages['charles'] ); //=> 13

//keys not in the object have undefined values
console.log( ages['fred']); //=> undefined

//assign values
ages['alice'] = 41;
console.log( ages['alice'] ); //=> 41

ages['fred'] = 19; //adds the key and assigns a value to it

console.log("------------- Accessing object properties (2) --------------");

var person = {
  firstName: 'Alice',
  lastName: 'Smith',
  favorites: {
    food: 'pizza',
    numbers: [12, 42]
  }
};

var name = person.firstName; //get value of 'firstName' key
person.lastName = 'Jones'; //set value of 'lastName' key
console.log(person.firstName+' '+person.lastName); //"Alice Jones"

var topic = 'food'
var favFood = person.favorites.food; //object in the object
              //object         //value

var firstNumber = person.favorites.numbers[0]; //12
person.favorites.numbers.push(7); //push 7 onto the Array

console.log("------------- Functions --------------");

function sayHello(name) 
{
    return "Hello, "+name;
}

//expected; parameter is assigned a value
console.log(sayHello("In4MATX 133")); //"Hello, IN4MATX 133"

//parameter not assigned value (left undefined)
console.log(sayHello()); //"Hello, undefined"

//extra parameters (values) are not assigned
//to variables, so are ignored
console.log(sayHello("IN4MATX","133")); //"Hello, IN4MATX"

console.log("------------- Functions are objects (1) --------------");

//assign function to variable
function sayHello(name) { 
   console.log("Hello, "+name);
}

var other = sayHello;

//prints "Hello, everyone"
other('everyone'); 

console.log("------------- Functions are objects (2) --------------");

//assign function to variable
var sayHello2 = function(name) { 
   console.log("Hello, "+name);
}

//second variable, same object
var greet = sayHello2;

//execute object named `greet`
greet('everyone'); 
    //prints "Hello, everyone"

console.log("------------- Functions are objects (3) --------------");

// remember we can give objects new members after creating the object!
// just like arrays!
var obj = {};
var myArray = ['a','b','c'];

//assign array to object
obj.array = myArray;

//access with dot notation
obj.array[0]; //gets 'a'

//assign literal (anonymous value)
obj.otherArray = [1,2,3]


// similar code for assigning a function to an object

var obj2 = {}
function sayHello3(name) { 
   console.log("Hello, "+name);
}

//assign function to object
obj2.sayHi = sayHello3;

//access with dot notation
obj2.sayHi('all'); //prints "Hello all"

//assign literal (anonymous value)
// this allows us to create non-static methods
// which require an object to access
obj2.otherFunc = function() { 
    console.log("Hello world! This is a non-static function");
}

obj2.otherFunc();

console.log("------------- Passing functions --------------");

//anonymous function syntax
var doAtOnce = function(funcA, funcB) {
    funcA();
    console.log(' and ');
    funcB();
    console.log(' at the same time! ');
}

var patHead = function(name) {
    console.log("pat your head");
}

var rubBelly = function(name) {
    console.log("rub your belly");
}

doAtOnce(patHead, rubBelly);

console.log("------------- Callback function example: foreach loop --------------");

//Iterate through an array
var array = ['a','b','c'];
var printItem = function(item) {
   console.log(`item: ${item}`);
}

array.forEach(printItem);

//more common to use anonymous function
array.forEach(function(item) {
   console.log(`item: ${item}`);
});

console.log("------------- Callback function example: map --------------");

var array = [1,2,3];

array = array.map(function(n) {
   return n*n;
});

console.log(array);

console.log("------------- Callback function example: map --------------");

var array = [3,1,4,2,5];

var isACrowd = array.filter(function(n) { 
   return n >= 3;
}); //returns [3,4,5]

console.log(isACrowd);

console.log("------------- Callback function example: reduce --------------");

var array = [1,2,3,4];

var sum = array.reduce(function(total, current) { 
   var newTotal = total + current;
   return newTotal;
}, 0); //returns 1+2+3+4=10

console.log(sum);