const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


// cur takes current value at each iteration .in this situation currenyt value is object at 0 1 2 3 index for each iteration
// so if we only pass cur it returns object.so to extract price we should use cur.price

// let total=shoppingCart.reduce( (acc , cur) => ( acc+cur.price ),0 )
// at each step value is stored in acc and item.price takes value of current object.price
// for simplicity i am using a

// let total=shoppingCart.reduce( (acc , item) => ( acc+item.price ),0 )
let total=shoppingCart.reduce( (acc , a) => ( acc+a.price ),0 )

console.log(total);