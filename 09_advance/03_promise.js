// //promise creation
// let promise1 = new Promise(function(resolve , reject){
//     setTimeout(() => {
//         console.log("Ankita")
//         resolve();    //resolve used to connect creation and consumption part
//     }, 1000);
// });

// //promise consumption
// promise1.then(function(){
//     console.log("Omkar Jagtap")
// }) 


// new Promise(function(resolve , reject){
//     setTimeout(() => {
//         console.log("Ankita")
//         resolve();    
//     }, 1000);
// }).then(function(){
//     console.log("Omkar Jagtap")
// }) 



// let promise2 = new Promise(function(resolve , reject){
//     setTimeout(() => {
//         console.log("Ankita")
//         resolve("omkar");
//     }, 1000);
// });

// promise2.then(function(a){
//     console.log(a)
// }) 

// erroe Promise { <pending> }
// let promise3 = new Promise(function(resolve , reject){
//     setTimeout(() => {
//         console.log("Ankita")
//         resolve({name:'omkar',age:20});
//     }, 1000);
// });

// let ret = promise3.then(function(a){
//     console.log(a)
//     return a.age;
// }) 
// console.log(ret)


// let promise3 = new Promise(function(resolve , reject){
//     setTimeout(() => {
//         console.log("Ankita")
//         resolve({name:'omkar',age:20});
//     }, 1000);
// });

// promise3.then(function(a){
//     console.log(a)
//     return a.age;
// }).then(function(b){
//      console.log(b)
// })


// let promise4 = new Promise( function ( resolve , reject ){
//     setTimeout( () => {
//         console.log("Ankita");

//         let err = false;

//         if(!err){
//             resolve( { name:'omkar' , age:20} );
//         }else{
//             reject("Something Went Wrong")
//         }

//     }, 1000 );
// });
// promise4.then( function( a ) {
//     console.log( a )
//     return a.age;
// }).then(function(b){
//      console.log(b)
// }).catch(function ( e ){
//     console.log(e)
// }).finally(function () {
//     console.log("finally block executed")
// })



// let promise5 = new Promise( function ( resolve , reject ){
//     setTimeout( () => {
//         console.log("Ankita");

//         let err = true;

//         if(!err){
//             resolve( { name:'omkar' , age:20} );
//         }else{
//             reject("Something Went Wrong")
//         }

//     }, 1000 );
// });

// async function promise5Handler (){
//     try {
//         let res = await promise5
//         console.log(res)
//     } catch (error) {
//         console.log(error)
//     }
// }



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
}



async function getAllUsers(){
   try {
        const a = fetch('https://jsonplaceholder.typicode.com/users')
        let data = (await a).json;
        console.log(data);
   } catch (error) {
        console.log(error)
   }
}

getAllUsers()