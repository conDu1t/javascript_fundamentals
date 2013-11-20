// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

var children = 3;
var geography = "Texas";
var partner = "Diesel Dave";
var vocation = "Mechanic";

var children = 1
var geography = "Alberta"
var partner = "Oil Tycoon"
var vocation = "housewife"

var children = 2
var geography = "Germany"
var partner = "Einstein"
var vocation = "Trophy husband"


function fortuneTeller(children, geography, partner, vocation) {
  alert("You will be a " + vocation + " in " + geography + ", and married to " + partner + " with " + children + " kids.");
}

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

var currentYear = 2013
var birthYear = 1989

function calculateAge(birthYear, currentYear) {
  alert("You are either " + (currentYear - birthYear) + " or " + (currentYear - birthYear - 1));
}

// BONUS

function calculateAge(birthYear) {
  alert("You are either " + (new Date().getFullYear() - birthYear) + " or " + (new Date().getFullYear() - birthYear - 1));
}

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

var age = 24
var amountPerDay = 2

var age = 16
var amountPerDay = 5

var age = 30
var amountPerDay = 4

function calculateSupply(age, amountPerDay){
  alert("You will need " + (100 - age) * amountPerDay + " Cookies & Cream to last until the ripe old age of 100");
}

// BONUS

var age = 24
var amountPerDay = 2.681946

function calculateSupply(age, amountPerDay){
  alert("You will need " + Math.round((100 - age) * amountPerDay) + " Cookies & Cream to last until the ripe old age of 100");
}


// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".

// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

var radius = 25;

function calcCircumference(radius){
  alert("The circumference is " + radius * 2 * 3.14);
}

function calcArea(radius){
  alert("The area is " + 3.14 * (radius * radius));
}

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".

// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsius = 25

function celsiusToFahrenheit(celsius){
  alert(celsius + "°C is " + (celsius * 9 / 5 + 32) + "°F");
}

var fahrenheit = 90

function fahrenheitToCelsius(fahrenheit){
  alert(fahrenheit + "°F is " + Math.round((fahrenheit - 32) * 5 / 9) + "°C");
}



