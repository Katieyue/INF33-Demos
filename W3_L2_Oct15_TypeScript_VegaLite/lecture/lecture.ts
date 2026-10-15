// -------------------- Typing 1 -------------------- 
var courseNumber:number = 133;
console.log('Hello, IN4MATX ' + courseNumber + '!');

// -------------------- Typing 2 -------------------- 
// switch which line is uncommented to see that both delcarations work!
var courseNum:any = 133;
//var courseNum = 133;

console.log('Hello, IN4MATX ' + courseNum + '!');

// -------------------- Typing 3 -------------------- 
// "better" function
// this enforces types
function area2(shape: string, width: number, height: number):string {
    var area:number = width * height;
    return "I'm a " + shape + " of area " + area + " cm^2.";
}

// notice, if you uncomment this line, you'll get a compiler error
// unlike regular javascript - this code is compiling, 
// and the types are being enforced!
//document.body.innerHTML = area2(15, 15, 'square');

// -------------------- Classes -------------------- 
// open lecture.js to see what this transpiled to!
class Shape {
    area: number;
    color: string;
    name: string;
 
    constructor (name: string, width: number, height: number ) {
        this.name = name
        this.area = width * height;
        this.color = "pink";
    };
    shoutout() {
        return "I'm " + this.color + " " + this.name +  " with an area of " + this.area + " cm squared.";
    }
}
 
var square = new Shape("square", 30, 30);