"use strict";
//Start the Kitchen Sink variable
//create a variable and store your name
var nameInput = 'Genesis';
var name = nameInput.toUpperCase();
//Create a variable to hold the number of states and name it appropriately
var numberOfStates = 50;
//add 5 + 4 and store it in a variable
var addition = (5 + 4);
//Check to see if name starts with an "L"
if (name.charAt(0) == 'L') {
    alert('Back of the line!');
}
else {
    alert('Next!');
}
//Write a function that says Hello World
function sayHello() {
    alert("Hello World");
}
//Call the Hello World function
sayHello();
//Create function to check the ages of people
function checkAge(name, age) {
    if (age < 21) {
        alert('Sorry ' + name + ', you aren\'t old enough to view this page!');
    }
}
//Call the function checkAge with the following people
checkAge('Juan', 26);
checkAge('Ruby', 23);
checkAge('Tomas', 25);
checkAge('Adriana', 13);
//Create an array for my favorite vegatables 
var favoriteVegetables = ['Squash', 'Spinach', 'Brocolli', 'Carrots'];
//Create a for loop to console log vegatables
for (x = 0; x < favoriteVegetables.length; x++) {
    console.log(favoriteVegetables[x]);
}
//Create an array of 5 objects for names and ages using properties
var people = [
    {
        name: 'Karla',
        age: 27
    },
    {
        name: 'Jessica',
        age: 20
    },
    {
        name: 'Paola',
        age: 9
    },
    {
        name: 'Yesi',
        age: 29
    },
    {
        name: 'Liz',
        age: 31
    }
];
//Create a for loop that passes each object from the array throught the checkAge function
for (i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}
//Create a function that checks the length of any word
function getLength(word) {
    return word.length;
}
//Call the getLength function and save it as a variable
var anyWord = getLength('Hello World');
//Check if the previous number is odd or even and console log results as follows
var testNumber = anyWord % 2;
if (testNumber == 0) {
    console.log('The world is nice and even!');
}
else {
    console.log('The world is an odd place!');
}
