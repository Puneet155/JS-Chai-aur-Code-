// if
const isUserLoggedIn = true
if(isUserLoggedIn ){

}

//<,>, <=, >=, ==,!= ,=== , !==
// == it only cheks value
// === it checks datatype & value

// const score = 200
// if(score > 100){
//     let  power = "fly"
//     console.log((`user power : ${power}`));
// }



const balance = 1000

// if(balance > 500 ) console.log("test")// implicit 

// if(balance < 500)
// {console.log(`less then 500`);}
// else if ( balance < 900){
//     console.log(`less then 900`);
// }
// else{
//     console.log(`less the 1200`);
// }



const UserLoggedIn = true
const debitCsard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (UserLoggedIn && debitCsard){
    console.log(` allow to buy course`);
}


if (loggedInFromEmail || loggedInFromGoogle){
    console.log(` User logged in `);
}