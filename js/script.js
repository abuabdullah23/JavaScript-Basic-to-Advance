/** 
// Data type
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job); // undefined

job = 'Teacher';
console.log(job); // Teacher


// wrong declaration
var 3years = 3; // before 3, should use '_' or '$' sign.
var john/mark = 'Jhon and Mark'; // should be use other case, like camel case
var if = 35; // if is a reserve keyword in javascript

// correct declaration
var _3years = 3;
var johnMark = 'John and Mark';
var $if = 35; 

*/


/************ Type coercion and variable mutation **************/
var fName = 'john';
var age = 28;

// type coercion
console.log(fName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(fName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried );


// variable mutation : So before it was a number and now it is new and it's a string. So that is the magic of the JavaScript dynamic typing.
age = 'twenty eight';
job = 'driver'
alert(fName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried );
var lastName = prompt('What is his last name?');
console.log(fName + ' ' + lastName);
 




