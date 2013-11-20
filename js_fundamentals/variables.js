// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var children = 3;
var partner = "Diesel Dave";
var geography = "Texas";
var vocation = "Mechanic";

console.log("You will be a " + vocation + " in " + geography + ", and married to " + partner + " with " + children + " kids." );

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentYear = 2013;
var birthYear = 1989;

console.log(currentYear - birthYear);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 24;
var maxAge = 100;
var estiPerDay = 2;

var yearsToGo = maxAge - currentAge;

var totalAmount = yearsTogo * estiPerDay;

console.log("You will need " + totalAmount + " Cookies & Cream to last you until the ripe old age of " + maxAge + ".");

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 25;

console.log("The circumference is " + radius * 2 * 3.14);

console.log("The area is " + 3.14 * (radius * radius));

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsius = 30;

celsius * 9 / 5 + 32;

var fahrenheit = celsius * 9 / 5 + 32;

console.log(30 + "°C is " + fahrenheit + "°F");

var backToCelsius = (fahrenheit - 32) * 5 / 9;

console.log(86 + "°F is " + backToCelsius + "°C");

