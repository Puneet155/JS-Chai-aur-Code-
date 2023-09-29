const userEmail = " abc.com"

if (userEmail){
    console.log(` got user email`);
}
else{
    console.log(`Dont't have user email`);
}


/*

falsy values
false ,0,-0,BigInt On,null,"", undefined, NaN


truthy values
"0", 'false, " ", [], {}, fonctiomn(){} empty function

*/

//Nullish coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10       
// val1 = null ?? 10       
// val1 = undefined ?? 10       
val1 = null ?? 10 ?? 20       



console.log(val1);


//ternary operator

//comdition? true : false

const iceTeaPrice = 100
iceTeaPrice >=80?console.log(`less thaN 80`) : console.log(` more than 80`);