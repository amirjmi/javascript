// ***************OBJECTS*************

const mySym = Symbol("key1")


const JsUser ={
    name: "Amir",
    "full name": "Mohammad Amir",
    [mySym]: "myKey1",
    age:23,
    location: "Delhi",
    email: "amirmd@google.com",
    isLoggedIn: false,
    lastloginDays: ["Monday","Saturday"]


}
// console.log(JsUser.email) 
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof [mySym])


JsUser.email = "amiridrisi@gpt.com"
// console.log(JsUser.email)

// Object.freeze(JsUser)
// JsUser.name = "farish"
// console.log(JsUser.name)
// console.log(JsUser)


// JsUser.greeting = function(){
//     console.log("Hello JS Users");
// }
// console.log(JsUser.greeting)
// console.log(JsUser.greeting())

// JsUser.greetingTwo = function(){
//     console.log(`Hello JS User, ${this.name}`);
// }
// console.log(JsUser.greetingTwo())




// const tinderUser = new Object() //singleton object
const tinderUser = {} // NON-SINGLETON OBJECT

tinderUser.id = "123abc"
tinderUser.name = "Amir"
tinderUser.isLoggedIn =false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Mohammad",
            lastname: "Amir"
        }
    }
}
// console.log(regularUser.fullname)


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}


// console.log(obj3)


const users =[
    {
      id: 1,
      email: "a@gmail.com"  
    },
    {
        id: 2,
        email: "m@gmail.com"  
    },
    {
        id: 3,
        email: "i@gmail.com"  
    },
]
users[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Amir"
}
// const {courseInstructor} = course
const {courseInstructor: instructor} = course //destructuring of object

// console.log(courseInstructor)
console.log(instructor)


// ***********JSON**************

{
    "name": "amir",
    "coursename": "js in hindi",
    "price": "free"
}











