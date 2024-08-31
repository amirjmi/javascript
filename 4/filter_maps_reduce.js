// ************Filter**********


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums)


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )   
// console.log(newNums)



// const books = [

//     { title: 'Book One', genre: 'Fiction', Publish: 1981, 
//     edition: 2004 },
//     { title: 'Book two', genre: 'History', Publish: 1985, 
//     edition: 2008 },
//     { title: 'Book three', genre: 'Science', Publish: 1989, 
//      edition: 2012 },  
//      { title: 'Book four', genre: 'Sci-Fi', Publish: 1993, 
//         edition: 2009 },
//         { title: 'Book five', genre: 'drama', Publish: 1997, 
//         edition: 2012 },
//         { title: 'Book six', genre: 'History', Publish: 2001, 
//          edition: 2004 },
//          { title: 'Book Seven', genre: 'Fiction', Publish: 2005, 
//             edition: 2012 },
//             { title: 'Book Eight', genre: 'Science', Publish: 2009, 
//             edition: 2016 },
//             { title: 'Book nine', genre: 'Fiction', Publish: 2014, 
//              edition: 2020 },      
// ]

// const userBooks = books.filter( (bk) => bk.genre === 'History')
// console.log(userBooks);

// let userBooks = books.filter( (bk) => bk.genre === 'History')
// userBooks = books.filter( (bk) => { 
//     return bk.Publish >= 2000 && bk.genre === "Science"
// })
// console.log(userBooks);


// *************MAP******************




// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.map( (num) => num + 10)
// console.log(newNums);


// ******Chaining(two or more method uses together)
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums
//            .map( (num) => num * 10)
//            .map( (num) => num + 1)

// console.log(newNums);



// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums
//            .map( (num) => num * 10)
//            .map( (num) => num + 1)
//            .filter( (num) => num >= 40 && num <= 80)

// console.log(newNums);



// *********REDUCE METHOD*********

// const myNums = [1, 2, 3]
// const myTotal = myNums.reduce(function (acc ,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// } , 0)

// const myTotal = myNums.reduce( (acc,curr) => acc+curr, 0)
// console.log(myTotal);



const shoppingCart = [
    {
        itemName: "JS course",
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
const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);








