"use script";

//const arr = [1, 2, 3, 4];

//---------------------- massivni boshiga qushish va olib tashlash
//arr.unshift(0); // qushadi
//console.log(arr);

//arr.shift(); // olib tashlaydi
//console.log(arr);
//---------------------- massivni oxiriga qushish va olib tashlash

//arr.pop(); // ayrish

//arr.push(5);// qushish

//console.log(arr);

//------------------------------

//for (let i = 0; i < arr.length; i++) {
//  console.log(arr[i]);
//}

//for (let val of arr) {
//  console.log(arr);
//}

//const color = ["red", "yellow", "blue"];
// metodda val bu metod argumenti // index bu soylahsuvi // arr bu arrayni uzi
//color.forEach(function (val, index, arr) {
//  console.log(val, index);
//});

// const question = prompt("", "");
// const answer = question.split(", "); // massivni date-type-string ga aylantirib beradi
// //console.log(answer);
// console.log(answer.join("; "));

//-----------------------
const number = [2, 15, 25, 35, 8];
number.sort(sortArr);
console.log(number);

function sortArr(a, b) {
  return a - b;
}
