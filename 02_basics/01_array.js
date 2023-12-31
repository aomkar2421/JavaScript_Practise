// let arr1=['a','b','c','d']
let arr=new Array(1,2,3,4,5,6)

// console.log(arr.length);

// arr.push(8);
// arr.push(6)
// console.log(arr);

// arr.pop()
// console.log(arr);

// arr.unshift(0)
// arr.unshift(3)
// console.log(arr);

// arr.shift()
// console.log(arr);

// console.log(arr.includes(19))
// console.log(arr.includes(1))

// console.log(arr.indexOf(19))
// console.log(arr.indexOf(1))

// let arr3=arr.join();
// console.log(arr3);

// console.log("A ",arr);
// console.log(arr.slice(2,6));
// let a=arr.slice(2,6)
// console.log(a);
// console.log("B ",arr);


// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)


let arr4=[21,56,98,43,32,12,23,34,45,6,89]
//console.log(arr4.splice(4));   //cuts array from given index
//console.log(arr4.splice(4,5));   //cuts from 1st index with give number of indexes
//console.log(arr4.splice(4,3,999,));  //same as above but adds elements 
console.log(arr4.splice(4,3,999,888,777,666,555,444,333,222,111));

console.log(arr4);

