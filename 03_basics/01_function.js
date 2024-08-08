//  function sayMyName(){
//     console.log("A")
//     console.log("M")
//     console.log("I")
//     console.log("R")


//  }
//  sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){
    let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(4,7)
// console.log("Result:", result)



// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Amir"))


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())



// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,600,1800))



function calculateCartPrice(val1,val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,600,1800))




const user = {
    username: "Amir",
    price: 1999
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})





const myNewArray = [200, 400, 300,  7000]

function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([1,4,5,89,3,9]))
