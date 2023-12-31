let arr=[45,87,98,65,34,21]
let obj={
    js:"javascript",
    py:"python",
    cpp:"c++"
}

let map=([
    ["name","omkar"],
    ["spouse","ankita"]
])

let a="ankitaomkar"

// for (const i of a) {
//     console.log(i);
// }

// for (const i of arr) {
//     console.log(i);
// }

// for of not usable for object
// for (const i of obj) {
//     console.log(i);
// }
// for (const [key,value] of obj) {
//     console.log(key);
// }

for (const i of map) {
        console.log(i);
}

// for (const [key,value] of map) {
//     console.log(key);
// }
// for (const [key,value] of map) {
//     console.log(value);
// }

// for (const [key,value] of map) {
//     console.log(key);
// }
// for (const [key,value] of map) {
//     console.log(key +'--'+ value);
// }


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
