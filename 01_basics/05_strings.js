let a="omkar"
let b="avi"

let str=`${a} is brother of ${ b}`
// console.log(str);

let abc=new String("omkar-avishkar");
// console.log(abc[7]);

let abcd=new String('omkaravishkar');
//console.log(abc[7]);

let ab="omkaravishkar";
console.log(ab[3]);
console.log(ab.__proto__);
//console.log(ab.__proto__.toUpperCase());

console.log(abc.length)
console.log(abc.charAt(6))
console.log(abc.indexOf(a)) 

console.log(abc.substring(4,8))
console.log(abc.slice(4,8))

console.log(abc.substring(-11,8)) //not support negative in case of it starts from 0
console.log(abc.slice(-11,8))

console.log(abc.trim)
console.log(abc.replace('a','o'))
 
console.log(abc.includes('w'))
console.log(abc.split('-'))
