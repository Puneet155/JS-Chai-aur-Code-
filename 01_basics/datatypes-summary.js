// //    Primitive

// // 7 types : String, number , boolean , null, undefinded, Symbol, bigint

// // const id =Symbol('123')
// // const anotherId = Symbol('123')

// // console.log(id === anotherId)

// // java script is dynamic 

// // Reference type or Non Primitive

// // Arrays, Objects, Functions

// const heros=["shaktiman", "ironman", 'superman']
// let myObj ={
//     name : "Puneet",
//     age : 22 ,
// }

// const myFunction =function(){
//     console.log("hello world")
// }


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) , Heap (Non Primitive)

let myYoutube = "skajdhuisafiuiwue"
let anotherName = myYoutube

anotherName="chai aur code "
console.log(myYoutube)
console.log(anotherName);



let userONE={
    email : "puneet155p@gmail.com",
    upi : "puneet155p@ybl"
}

let useTwo = userONE

useTwo.email="hello@gmail.com"

console.log(userONE.email)
console.log(useTwo.email)