let arr = [5, 10, 20, 30, 40];
let newArr = [];

if (arr.length >= 1) {
  newArr.push(arr[0]);
  newArr.push(arr[arr.length - 1]);
  console.log(newArr);
} else {
  console.log("Array length must be larger than or equal to 1");
}