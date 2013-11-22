// Exercises: for loops

// EXERCISE: The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for(i = 0; i < 21; i++){
  if(i % 2 == 1) {
    console.log(i + " is odd.");
  } else {
    console.log(i + " is even.");
  }
} 

// EXERCISE: Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

for(i = 0; i < 11; i++){
  console.log(i * 9);
}

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for(i = 0; i < 11; i++){
  for(j = 0; j < 11; j++){
    total = i * j;
    console.log("Total: " + total);
  }
}

// EXERCISE: The Grade Assigner

// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

function assignGrade(i){
for(i = 50; i < 101; i++){
  if( i >= 80 ){
    console.log('For ' + i + ' you got an A.');
    } else if( i >= 70 ){
      console.log('For ' + i + ' you got a B.');
    } else if( i >= 60){
      console.log('For ' + i + ' you got a C.');
    } else if(i >= 50){
      console.log('For ' + i + ' you got a D.');
    } else {
      console.log('You failed.');
    }
  }
}
