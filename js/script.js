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
 */


/************************************
* Coding Challenge
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true")

var massMark, heightMark, markBMI, massJohn, heightJohn, johnBMI;
massMark = 78;
heightMark = 1.69;
// heightMark = ((5.6 * 12 * 2.52) / 100).toFixed(2);

massJohn = 92;
heightJohn = 1.95;
// heightJohn = ((6.45 * 12 * 2.52) / 100).toFixed(2);

markBMI = massMark / (heightMark * heightMark);
johnBMI = massJohn / (heightJohn * heightJohn);

console.log(markBMI, johnBMI);

var markHigherBMI = markBMI > johnBMI;

console.log(`Is Mark\'s BMI higher than John\'s? ${markHigherBMI}`);
*/

/****************************
 * If / else statements
 

var firstName = 'John';
var civilStatus = 'single';
if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon:)!');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon:)!');
}
*/

/****************************
 * Boolean Logic
 * 
var age = 16;

console.log(age >= 20);
console.log(age < 30);
console.log(!(age < 30));

console.log(age >= 20 && age < 30);
console.log(age >= 20 || age < 30);

var firstName = 'John';
if (age < 13) {
    console.log(firstName + 'is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
 */


/*******************************
 * Ternary Operator and Switch Statements
var firstName = 'John';
var age = 14;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks Tea') : console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'Tea' : 'juice';
console.log(drink);

// Switch operator
var job = 'instructor';

switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an pathaw in Dhaka.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

// Boolean condition with switch
age = 13
switch (true) {
    case age < 13:
        console.log(firstName + 'is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
 */


/**********************************
 * Truthy and Falsy value and Equality operators
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;
height = 0;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable is NOT been defined');
}

// Equality operators
height = 22;
if (height == '22') {
    console.log('The == operator does type coercion!');
} else {
    console.log('The === operator does checking variable type also.');
}
 */


/*******************************
 * Challenge 15
 * John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output. 
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
var jonScore = (89 + 120 + 103) / 3;
var mikeScore = (116 + 94 + 123) / 3;
var maryScore = (97 + 134 + 105) / 3;

console.log(jonScore, mikeScore, maryScore);

// tree teams condition
if (jonScore > mikeScore && jonScore > maryScore) {
    console.log('Jon\'s team win the game.' + ' Score: ' + jonScore);
} else if (mikeScore > jonScore && mikeScore > maryScore) {
    console.log('Mike\'s team win the game.' + ' Score: ' + jonScore);
} else if (maryScore > jonScore && maryScore > mikeScore) {
    console.log('Mary\'s team win the game.' + ' Score: ' + jonScore);
}else{
    console.log('There is draw');
}


// two teams condition
console.log(jonScore, mikeScore);
if (jonScore > mikeScore) {
    console.log('Jon\'s team win the game.' + ' Score: ' + jonScore);
} else if (mikeScore > jonScore) {
    console.log('Mike\'s team win the game.' + ' Score: ' + jonScore);
} else {
    console.log('There is Draw');
}
 */




/********************************
 * Functions
function calculateAge(birthYear) {
    return 2024 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMark = calculateAge(1995);
console.log(ageJohn, ageMark);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1980, 'John')
yearsUntilRetirement(1970, 'Mark')
yearsUntilRetirement(1945, 'Mike')
 */


/*****************************************
 * Function statements and expressions
// Function declaration
// function whatDoYouDo(job, firstName) { }

// Function expression
var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a car in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful website.';
        default:
            return firstName + ' does something else..';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('driver', 'Dohn'));
console.log(whatDoYouDo('drives', 'Dohn'));
 */



/**************************
 * Arrays
//Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1995, 1996, 1998);

console.log(names[1]);
console.log(years[1]);


// Mutate array data
names[1] = 'Ben';
console.log(names);

names[5] = 'Mary';
console.log(names);
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1999, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1999)); // 2
console.log(john.indexOf(23)); // -1

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer.' : 'John is a designer.';
console.log(isDesigner);
 */


/***********************************
 * Challenge 20
 * John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays: 
1) Containing all three tips (one for each bill) 
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply if with 20/100 = 0.2)
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill <= 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return bill * percentage;
}
var bills = [124, 48, 268];

var tips = [
    tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator(bills[2])
];

var finalValue = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
]

console.log(tips);
console.log(finalValue);
 */


/*********************************
 * Object and Properties
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
}

// dot notation
console.log(john.family);

// bracket notation
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

// Muted 
john.job = 'designer';
john['isMarried'] = true;

console.log(john);


// new object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1998;
jane['lastName'] = 'Smith';
console.log(jane);
console.log(jane.lastName);
 */


/*********************************
 * Objects and Methods
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1995,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    ageCalc: function (year) {
        this.age = year - this.birthYear; // set as a property
    }
};

john.ageCalc(2023);
console.log(john);
 */


/*******************************
 * Objects Challenge -4

Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods. 
1. For each of them, create an object with properties for their full name, mass, and height 
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
var mark = {
    firstName: 'Mark',
    mass: 78,
    height: 1.69,
    bmiCalculator: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

// mark.bmiCalculator();
console.log(mark.bmi);

var john = {
    firstName: 'John',
    mass: 92,
    height: 1.95,
    bmiCalculator: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

// john.bmiCalculator();
console.log(john.bmi);

// Print the result
if (mark.bmiCalculator() > john.bmiCalculator()) {
    console.log(mark.firstName + ' BMI is Highest.');
} else if (john.bmi > mark.bmi) {
    console.log(john.firstName + ' BMI is Highest.');
} else {
    console.log('There BMI is Draw!');
}
*/


/************************************
 * Loops and Iteration
// for loop
for (var i = 1; i <= 10; i++) {
    console.log(i); // 1,2,3,4,5,6,7,8,9,10
}

var john = ['John', 'Smith', 1999, 'teacher', false, 'blue'];

// Correct but wrong approach
console.log(john[0]);
console.log(john[1]);
console.log(john[2]);
console.log(john[3]);
console.log(john[4]);

// Correct Approach
for (var i = 0; i < john.length; i++) {
    console.log(john[i]); // 'John', 'Smith', 1999, 'teacher', false, 'blue'
}

// while loop
var i = 0;
while (i < john.length) {
    console.log(john[i]); // 'John', 'Smith', 1999, 'teacher', false, 'blue'
    i++;
};

// continue and break statements
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]); // 'John', 'Smith', 'teacher', 'blue'
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]); // 'John', 'Smith'
}


// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]); // 'blue', false, 'teacher', 1999, 'Smith', 'John'
}
 */


/***********************************
 * Challenge 5 : Loop

Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations 
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the Loop.

var johnBills = {
    fullName: 'John Smith',
    paidBill: [124, 48, 268, 180, 426],
    calcTips: function () {
        this.tips = [];
        this.finalBill = [];

        for (var i = 0; i < this.paidBill.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.paidBill[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill <= 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }

            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalBill[i] = bill + bill * percentage;
        }
    }
}

johnBills.calcTips();
console.log(johnBills);
console.log(johnBills.tips);
console.log(johnBills.finalBill);
*/

/**********************************
 * EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

// Extra Solution
var markBills = {
    fullName: 'Mark Miller',
    paidBill: [77, 375, 110, 45],
    calcTips: function () {
        this.tips = [];
        this.finalBill = [];

        for (var i = 0; i < this.paidBill.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.paidBill[i];

            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill <= 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }

            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalBill[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}


markBills.calcTips();

johnBills.average = calcAverage(johnBills.tips);
markBills.average = calcAverage(markBills.tips);
console.log(johnBills, markBills);

if (johnBills.average > markBills.average) {
    console.log(johnBills.fullName + '\s family pays higher tips, with an average of $' + johnBills.average);
} else if (markBills.average > johnBills.average) {
    console.log(markBills.fullName + '\s family pays higher tips, with an average of $' + markBills.average);
}else{
    'They are pay equal.';
}
 */
