// Variable

// Are Case-Sensitive

// let HelloWorld = true;

// let a, b, c:
// a = 1;
// b = 2;
// c = 3;

// console.log(age);

// constants 
// const pi = 3.14;
// pi = 5; --> cannot do this
// console.log(pi);

// String
// let name = 'Viet';
// let age = 17; //number literal
// let loveCats = true; //Boolean literal
// let color = null; //Null
// let list = undefined; //undefind
// let list; //Same as undefind

// console.log(list);
// console.log(name);

// name += ' Bui'; //same as name = name + ....
// let message = `${name} is ${age}`; //--> this is modern way to use it //can use double or single quotation mark

// age -= 5;

// console.log(age);

// Array Literals

// const myArray = ['red', 4, true, null, [1, 2, 3]];

// colors[4] = 'black';

// colors.push('white');
// let lastColors = colors.shift();
// console.log(lastColors);
// console.log(myArray);

// Object Literals


// Functions

// function hello(firstName, lastName) {
//   console.log(`Hello ${firstName} ${lastName}`);
// }

// function convertPercent(num) {
//   return num / 100;
// }

// console.log(convertPercent(100));
// const convertPercent = (num) => num / 100; //shorter but not good for complicated algo

// console.log(convertPercent(75));


// Loops
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// for (let i = 0; i < 10; i++) { //much more compact than while
//   console.log(i); 
// }

// const people = [
//   {
//     firstName: 'Viet',
//     lastName: 'Bui',
//     age: 17
//   },
//   {
//     firstName: 'Thuan',
//     lastName: 'Bui',
//     age: 12
//   },
// ]

// for (let person of people) {
//   console.log(person.age);
// }
// people.forEach(person => console.log(person.age));

// const personName = people.map(person => person.firstName);

// const personAgeUnder30 = people.filter(person => person.age < 30); //filtering Array and we need only certain items in the array this is easier to pull them out

// console.log(personAgeUnder30); //pull out new Array!!!!!

// Conditionals

// let age = 17;
// //dounle equal sign is compare and not assign//triple equal is truely equal to //&& is an // || is or
// if ( age > 30 ) { 
//   console.log('Greater than 30');
// } else if (age > 25 ) {
//   console.log('Greater than 25');
// } else {
//   console.log('Less than 35');
// }
// // else {
//   // console.log(false);
// // }

let a = 1, b = 2;
// function evaluate() {
//   if (a < b) {
//     return true
//   } else {
//     return false
//   }
// }

// function evaluate() {
//   return a > b // this basically and if statement and will evaluate a and b
// }

// console.log(evaluate());

// let animal = 'cat';
// // const likesWhale = animal === 'whale' ? true : false; // if animal equals whale then return true, else return false
// // console.log(likesWhale);

// switch(animal) {
//   case 'dog':
//     console.log('dog'); // if a case is dog then do this then exit
//     break
//   case 'whale':
//     console.log('whale'); // if not dog then do this then break
//     break 
//   default:
//     console.log('Neither'); // if neither of then then do this and break
//     break
// }

// DOM -Document Object Model

// Single Element Selectors
const list = document.querySelector('#list');
const listItems = document.querySelectorAll('.list-item'); //only find the first that match to

// listItems.forEach(item => {
//   console.log(item.textContent);
// })
// console.log(listItems);

// list.firstElementChild.remove();
// list.firstElementChild.textContent = "New item"
// list.firstElementChild.innerHTML = "<h1>New Item</h1>"
list.lastElementChild.style.background = 'red'