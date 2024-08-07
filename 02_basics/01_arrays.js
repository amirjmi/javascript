// *******************ARRAYS***********
// const myArr = [1,2,3,4,6,]
// const myHeroes = ["ironman","spiderman","Antman"]
// const myArr2 = new Array(5,6,3,7)
// console.log(myArr[1]);
// console.log(myHeroes[2]);
// console.log(myArr2[1]);


// **********Arrays Method*********


// PUSH METHOD:- ADDING VALUES IN ARRAY
// myArr.push(4,10)  
// console.log(myArr);


// POP METHOD:- REMOVE LAST VALUE FROM ARRAY
// myArr.pop()
// console.log(myArr);



// UNSHIFT METHOD:- ADD VALUE AT START IN ARRAY
// myArr.unshift(9)
// console.log(myArr);



// SHIFT METHOD:- REMOVES FIRST VALUE IN ARRAY
// myArr.shift()
// console.log(myArr);


// console.log(myArr.includes(10));
// console.log(myArr.indexOf(2));


// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// ***** Slice and Splice method ******

// const myArr = [1,2,3,4,6,]
// console.log("A",myArr);
// const myn1 = myArr.slice(1,3)
// console.log(myn1);

// console.log("B",myArr)
// const myn2 = myArr.splice(1,3)
// console.log("C",myArr)
// console.log(myn2);











const marvel_heroes = ["Thor","Ironman","Spiderman"]
const dc_heroes = ["superman","flash","batman"]
// marvel_heroes.push(dc_heroes)     //this is not the correct way to add arrays
// console.log(marvel_heroes);


// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);


// ************Spread method***************
// const all_new_heoes = [...marvel_heroes,...dc_heroes]
// console.log(all_new_heoes);


// const another_array = [1,2,3, [4,5,6],7,[6,7],[4,5]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


// console.log(Array.isArray("Almir"));
// console.log(Array.from("Almir"));
// console.log(Array.from({name: "Almir"}));  //this is Important because this give an empty array




let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400
console.log(Array.of(score1,score2,score3,score4));









