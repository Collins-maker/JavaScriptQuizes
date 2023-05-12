let angle = prompt("Enter an angle value:");
angle = parseFloat(angle);  // convert input to a number

if (isNaN(angle)) {
  console.log("Invalid input");
} else if (angle >= 0 && angle < 90) {
  console.log("Acute angle");
} else if (angle == 90) {
  console.log("Right angle");
} else if (angle > 90 && angle < 180) {
  console.log("Obtuse angle");
} else if (angle == 180) {
  console.log("Straight angle");
} else {
  console.log("Invalid angle");
}