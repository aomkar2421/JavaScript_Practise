// let arr=[45,87,98,65,34,21]
// let obj={
//     js:"javascript",
//     py:"python",
//     cpp:"c++"
// }

// let map=([
//     ["name","omkar"],
//     ["spouse","ankita"]
// ])

// let a="ankitaomkar"

// // for (const i in arr) {
// //     console.log(i);
// // }

// // for (const i in obj) {
// //     console.log(i);
// // }

// // // in case of array map and string key returns index of values
// // for (const i in map) {
// //     console.log(i);
// // }

// // for (const i in a) {
// //     console.log(i);
// // }

// for (const i in arr) {
//     console.log(arr[i]);
// }

// for (const i in obj) {
//     console.log(obj[i]);
// }

// // in case of map and string type[key] returns values at indexes
// for (const i in map) {
//     console.log(map[i]);
// }

// for (const i in a) {
//     console.log(a[i]);
// }

// Define an object
const myObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

// Using for...in loop to print keys
console.log("Using for...in loop to print keys:");
for (const key in myObject) {
  console.log(key);
}

// Using for...in loop to print values
console.log("\nUsing for...in loop to print values:");
for (const key in myObject) {
  console.log(myObject[key]);
}

// Using for...of loop to print keys and values
console.log("\nUsing for...of loop to print keys and values:");
for (const [key, value] of Object.entries(myObject)) {
  console.log(`${key}: ${value}`);
}
