function uname ( username ){
    this.username = username ;
}

// not work without call due to this which is current execution context
function cuser ( username ,pass ,mail ) {
    uname.call(this , username)
    this.pass = pass ;
    this.mail = mail ;
}

let user2 = new cuser ( "omkar" , "omka123" , "omkar@gmail.com");
console.log(user2)



// this code works well just dont use this and keep actual and other parameters name diff
// function uname ( u ){
//     username = u ;
//     return u
// }

// function cuser ( a ,b ,c ) {
//     let username = uname(a) ;
//     let pass = b ;
//     let mail = c ;
//     return username +" "+pass+" "+mail
// }

// let user1 = cuser ( "omkar" , "omkar@1234" , "omkar@gmail.com");
// console.log(user1);

