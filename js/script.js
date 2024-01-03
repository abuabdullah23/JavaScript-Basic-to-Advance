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


/************ Type coercion and variable mutation *************
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
*/



/************** Basic Operator ****************  
var now, yearJohn, yearMark;
now = 2024;
ageJohn = 28;
ageMark = 23;

// Math Operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn, yearMark);

console.log(now * 2);
console.log(now - 2);
console.log(now / 2);
console.log(now % 3); // 2

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder); // true

// Type of Operators
var x;
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Something');
console.log(typeof x);
*/


/************************************
 * Operators Precedence
 */
var now = 2024;
var yearJohn = 1989;
var fullAge = 20;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge); // true

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 34;
var average = (ageJohn + ageMark) / 2;
console.log(average); // 34.5

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // here is first execute 'y' value, then execute x = y;
console.log(x, y); // 26 26

// More operators
x *= 2 // x = x * 2;
console.log(x); // 52
x += 10 // x = x + 2;
console.log(x); // 62

x++; // x = x + 1; // x += 1; Increase one by one
console.log(x);
x--; // x = x + 1; // x += 1; Decrease one by one
console.log(x);