// let user={
//     fname:"omkar",
//     lname:"jagtap",
//     "full name":"omkar sanjay",
//     age:21,
//     isStudent:true,
//     email:"omkarjagtap@gmail.com"
// }


// console.log(user.fname);
// console.log(user["fname"]);
// //console.log(user.full name);      returns error
// console.log(user["full name"]);




/*
to add symbol in object we need to declare it first outside object and then need to use 
inside object we also need to give [] for key , we cannot access it dot notation 
*/


const mySym = Symbol("key1")
const abc= Symbol("avi1")

let user={
    fname:"omkar",
    lname:"jagtap",
    [mySym]: "mykey1",
    [abc]: "avishkar1",
    "full name":"omkar sanjay",
    age:21,
    isStudent:true,
    email:"omkarjagtap@gmail.com"
}

// console.log(user[mySym])
// console.log(user[abc]);
// console.log(user["fname"]);

user.greetings=function(){
    console.log("hello");
}

user.greetingsTwo=function(){
    console.log("hello "+this.fname);
}

console.log(user.greetings());
console.log(user.greetingsTwo());



