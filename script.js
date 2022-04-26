"use script";

// const a = 5,
//   b = a;
// console.log(b + 5);

//-------------------------

// const bmw = {
//   color: "black",
//   isBuy: false,
// };

// function copyObj(obj) {
//   let ObjCopy = {};
//   for (let key in obj) {
//     ObjCopy[key] = obj[key];
//   }
//   return ObjCopy;
// }

// const nexiaR3 = {
//   color: "black",
//   isBuy: false,
//   shum: {
//     a: 100,
//     b: 200,
//   },
// };

// const spark = copyObj(nexiaR3);
// spark.color = "red";
// console.log(nexiaR3);
// console.log(spark);

// const nexia2 = {
//   color: "red",
//   isBuy: true,
// };

// const extra = {
//   shum: 250,
// };

// console.log(Object.assign(nexia2, extra));
// // Object.assign bu orqali obyektlarni qushib yuborsa buladi

// const newcar = Object.assign({}, nexia2);
// newcar.isBuy = false;
// newcar.color = "blue";
// console.log(nexia2);
// console.log(newcar);
// //--------------------------------

// //-----------------massivlarni kapirovka qilish usuli

// const arr = [1, 2, 3, 4];
// const newarr = arr.slice();
// newarr[1] = 22;
// console.log(arr);
// console.log(newarr);

//------------------------SPREAD OPERATORLARI
// const car = ["bmw", "mers", "tesla"],
//   plane = ["uzbairways", "turkish", "usa"],
//   texnology = [...car, ...plane, "gm"];
// console.log(texnology);

function numb(a, b, ...c) {
  console.log(a, b, c);
}
numb(1, 2, 4, 5, 6, 7);

function func(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
numbers = [1, 2, 3, 4, 5, 6, 7, 8];
func(...numbers);
