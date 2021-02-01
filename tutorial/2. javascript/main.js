/*
alert('Hello World'); this gives a popup

following is console, f12
console.log('hello world');
console.error('this is an error');
console.warn('this is a warning');
more methods for console by searching mdn console
*/

//let, const
let score;
score = 31
console.log(score)

const height = 180
// height = 181 , constant cant be changed
console.log(height)


// Data types
// Strings, Numbers, Boolean, null, undefined, Symbol
const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof x); // null is object
console.log(typeof z); // any undefined let is undefined


// concatenation
console.log('My name is ' + name + ' and I am ' + age);
// template string, use backticks, not quotes
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

// strings
const s = 'Hello World!';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(''));

const t = 'technology, computers, it, code';
console.log(t.split(', '));

//Arrays- variables that hold multiple values
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears', 10, true];
fruits[3] = 'grapes';
fruits.push('mangos');
fruits.unshift('strawberries');
fruits.pop();
console.log(fruits);

console.log(Array.isArray(fruits));

console.log(fruits.indexOf('oranges'));


// object literals, key value pairs
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age:30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person.hobbies[1]);
console.log(person.address.city);

const { firstName, lastName, address:{city} } = person;
console.log(firstName);
console.log(city);

person.email = 'john@gmail.com';
console.log(person.email);

// arrays of objects
const todos = [
    {
        id:1,
        text: 'take out trash',
        isComplete:true
    },
    {
        id:2,
        text: 'meeting with boss',
        isComplete:true
    },
    {
        id:3,
        text: 'dentist appointment',
        isComplete:false
    },
];

console.log(todos);
console.log(todos[1].text);

// how to send data to server (JSON)
const todoJson = JSON.stringify(todos);
console.log(todoJson);

//for loops
for(let i = 0; i<10; i++){
    console.log(`for loop number: ${i}`);
}

//while loops
let i = 0;
while (i<10) {
    console.log(`while loop number: ${i}`);
    i++;
}

/*
// loop through array
for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}
*/

// better to use for of loop
for(let t of todos) {
    console.log(t.text);
}
// high order array methods
// forEach, map, filter
todos.forEach(function(t){
    console.log(t.text);
});

const todoText = todos.map(function(t){
    return t.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function(t){
    return t.isComplete === true;
}).map(function(t){
    return t.text;
});
console.log(todoCompleted);


// if statements
 const b = 4;
 const c = 10;
 if (b === 10 || c > 10){
     console.log('b is 10 or c is greater than 10');
 } else if (b > 10) {
     console.log('b is greater than 10');
 } else {
     console.log('b is less than 10');
 }

 // ternary operator, short if statement
const d = 9;
const color = d > 10 ? 'red' : 'blue';
console.log(color);

// switches
switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

// functions
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2
}

console.log(addNums(5,4));
console.log(addNums());

// arrow function
const addNums2 = (num1 = 1, num2 = 1) => num1 + num2;
console.log(addNums2(5,5));

// object oriented programming
/*
// constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}
// prototype
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
*/
// Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}


// instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');
console.log(person1.getBirthYear());
console.log(person2.dob.getFullYear());
console.log(person1.getFullName());

//DOM, under dom.js