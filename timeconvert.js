
let number = prompt("Enter a number of you want to convert into time:");
number = parseInt(number);  // convert input(the number given ) to an integer value

if (isNaN(number)) {
  console.log("Invalid input");
} else {
  let hours = Math.floor(number / 60);  // get the number of hours
  let minutes = number % 60;  // get the minutes from remaining number
  console.log( `${hours} hours and ${minutes} minutes.`);
}
