let obj1={
    a:1,
    b:2,
}

let obj2={
    c:3,
    d:4,
}

// let obj3={obj1,obj2}
// console.log(obj3);

// let obj3=Object.assign(obj1,obj2);
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// let obj3=Object.assign({},obj1,obj2);
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);


// info of users from database can be in the form as
// let user=[
//     {
//         id:1,
//         name:"om"
//     },
//     {
//         id:2,
//         name:"avi"
//     },
//     {
//         id:3,
//         name:"ani"
//     }
// ]

// console.log(user[0]);
// console.log(user[0].name);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


let user={
    fname:"omkar",
    lname:"jagtap",
    full_name:"omkar sanjay",
    age:21,
    isStudent:true,
    email:"omkarjagtap@gmail.com"
}

let {full_name}=user;
console.log(full_name);

let {full_name:un}=user;
console.log(un);


