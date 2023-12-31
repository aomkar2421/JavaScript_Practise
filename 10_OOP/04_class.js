// class CreateUser {

//     constructor(username , password , email){
//         this.username = username;
//         this.password = password;
//         this.email = email;
//     }

//     encryptPass(){
//         return "password is "+this.password;
//     }
//     changeUsername(){
//         return this.username.toUpperCase();
//     }
// }

// let user1 = new CreateUser("omkar" , "omk1234")
// console.log(user1.encryptPass())
// console.log(user1.changeUsername())


//behind the scenes

function CreateUser(username , password , email){
    this.username = username;
    this.password = password;
    this.email = email;
}

CreateUser.prototype.encryptPass = function (){
    return "password is "+this.password;
}

CreateUser.prototype.changeUsername = function (){
    return this.username.toUpperCase();
}

let user1 = new CreateUser("avi" , "avi1234" ,"@gmail")
console.log(user1.encryptPass())
console.log(user1.changeUsername())



// class CreateUser {

//     constructor(a , b , c){
//         let username = a;
//         password = b;
//         let email = c;
//     }
//    // we cannnot declare variables here
//     encryptPass(){
//         return "password is "+password;
//     }
// }

// let user1 = new CreateUser("omkar" , "omk1234")
// console.log(user1.encryptPass())