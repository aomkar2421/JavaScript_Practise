//console.log(Object.getOwnPropertyDescriptor(Math , 'PI'))
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

let obj ={
    name : 'omkar',
    age : 20,
    married : true,
    spouse : "none"
}
obj.spouse = 'ankita'

console.log(Object.getOwnPropertyDescriptor(obj , 'spouse'));
Object.defineProperty( obj , 'spouse' , {
    writable : false,
    enumerable : false
} )

obj.spouse = 'none'
console.log(Object.getOwnPropertyDescriptor(obj , 'spouse'));








// console.log(Object.getOwnPropertyDescriptor(obj , 'name'));
// Object.defineProperty( obj , 'name' , {
//     writable : false,
//     enumerable : false
// } )


// for (const key in obj) {
//     console.log(key)
// }

// for (const values in obj) {
//     console.log(values)
// }

// for (const [key , values] of Object.entries(obj)) {
//     console.log(key +" : "+values)
// }

// Object.defineProperty( obj , 'name' , {
//     writable : false,
//     enumerable : false
// } )

// console.log(Object.getOwnPropertyDescriptor(obj , 'name'));

// console.log('after changing name property writable from true to false ')
// for (const [key , values] of Object.entries(obj)) {
//     console.log(key +" : "+values)
// }




// const chai = {
//     name: 'ginger chai',
//     price: 250,
//     isAvailable: true,

//     orderChai: function(){
//         console.log("chai nhi bni");
//     }
// }

// for (const [key , values] of Object.entries(chai)) {
//         console.log(key +" : "+values)
// }

// for (const [key , values] of Object.entries(chai)) {
//     if(typeof values !== 'function'){
//         console.log(key +" : "+values)
//     }
// }