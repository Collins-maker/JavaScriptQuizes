let num1 = prompt("Enter the first integer:");
let num2 = prompt("Enter the second integer:");

num1 = parseInt(num1);  // convert input to an integer
num2 = parseInt(num2);  // convert input to an integer

if (isNaN(num1) || isNaN(num2)) {
  console.log("Invalid input");
} else if (num1 === 8 || num2 === 8) {
  console.log("One of the numbers is 8");
} else if (num1 + num2 === 8){
  console.log("The sum of the numbers is 8");
}else if(Math.abs(num1 - num2) === 8 ){
  console.log("The difference of the numbers is 8");
}
 else {
  console.log("Neither of the conditions is true");
}
