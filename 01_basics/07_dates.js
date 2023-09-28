//dates


let myDate = new Date()
// console.log((myDate.toString()));//Thu Sep 28 2023 19:51:51 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Thu Sep 28 2023
// console.log(myDate.toISOString());//2023-09-28T19:54:08.649Z
// console.log(myDate.toJSON());//2023-09-28T19:54:08.649Z
// console.log(myDate.toLocaleDateString());//9/28/2023
// console.log(myDate.toTimeString());//19:54:08 GMT+0000 (Coordinated Universal Time)

// console.log(typeof myDate);

// let myCreateDate = new Date (2023, 0 ,23)
// let myCreateDate = new Date (2023, 0 ,23, 5, 3)
let myCreateDate = new Date ("2023-01-14")//Sat Jan 14 2023
// console.log(myCreateDate.toDateString());//Mon Jan 23 2023
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());//1673654400000

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getMonth());



newDate.toLocaleString('default',{
    weekday: "long",
})