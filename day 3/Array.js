//! insertion into an array
// let arr = [];
// arr[0] = "Saara";
// arr[1] = false;
// arr[2] = 120;
// arr[10] = "Last";
// console.log(arr);

// //! push
// let arr = [1, 2, 3];

// let num = [11, 22, 33, 44, 55, 66];

// let res = num.reduce((acc, val) => {
//   // console.log(acc, val);
//   return acc + val;
// }, 500);
// console.log(res);

// num.reduce((acc, val) => {
//   console.log(acc, val);
//   return acc + val;
// });
// for (let i of num) {
//     console.log(i);
// }
// for (let i in num) {
//   console.log(i);
// }
// num.forEach((val, i) => {
//   console.log(val, i);
// });

let num = [11, 20, 33, 40, 55, 66, 77, 88, 99];

// let res = [];
// for (let el of num) {
//   if (el % 2 == 0) {
//     console.log(el);

//     res.push(el);
//   }
// }
// console.log(res);

// let res = num.filter((e) => e % 2 == 0);
// console.log(res);

num.map((y) => y * 2);
console.log(map);
