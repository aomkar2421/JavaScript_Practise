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

let a="AnkitaOmkar"

// used only for map and array

// a.forEach(element => {
//     console.log(element);
// });

// obj.forEach(element => {
//     console.log(element);
// });

// arr.forEach(element => {
//     console.log(element);
// });

// map.forEach(element => {
//     console.log(element);
// });

// arr.forEach(function(a) {
//     console.log(a);
// });

// arr.forEach((a) => {
//     console.log(a);
// });

// arr.forEach( a => {
//     console.log(a);
// });

// function multiplyByTwo(a){
//     console.log(a*2);
// }

// arr.forEach(multiplyByTwo)
//arr.forEach(multiplyByTwo()) return error

let cart=[
    {
        item:"smartphone",
        prize:9999
    },
    {
        item:"Laptop",
        prize:99999
    },
    {
        item:"Refriggerator",
        prize:12999
    },
    {
        item:"Tv",
        prize:19999
    },
]

cart.forEach(element => {
    console.log(element.item);
});


