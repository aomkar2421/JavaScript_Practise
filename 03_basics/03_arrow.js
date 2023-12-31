// let user={
//     username:"omkar",
//     age:20,
//     welcomeMessage:function(){
//         console.log(this.username);
//         console.log(this);
//     }
// }

// user.welcomeMessage()
// user.username="ankita"
// user.welcomeMessage()
// console.log(this);

// //without this there will be error

// function abc(){
//     console.log(this)
// }

// abc()
// console.log(this)

// let def = () => {
//     console.log(this)
// }
// def()
// normal function=>this keyword=>global object
// arrow function=>this keyword=>empty object


// function addOne(num1,num2){
//     return num1+num2;
// }
// console.log(addOne(8,3));

// lmn = (num1 ,num2) => num1 + num2;
// console.log(lmn(8,8));

// pqr = (num1 ,num2) => ( num1 + num2 )
// console.log(pqr(9,9));

xyz = (num1 ,num2) => ( {username:"omkar",age:20} )
console.log(xyz(6,7));

uvw = () => ( {username:"omkar",age:20} )
console.log(uvw());



