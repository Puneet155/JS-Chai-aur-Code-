function sayMyName(){
    console.log("P");
    console.log("u");
    console.log("n");
    console.log("e");
    console.log("e");
    console.log("t");
}

// sayMyName()

// function addTwoNumbers(number1,number2){//parameters
//     console.log(number1+number2);
// }

// const result =addTwoNumbers(3,"a")//arfguments
// console.log("Result: ",result);

function addTwoNumbers(number1,number2){//parameters
    // let result = number1+number2
    // return result;
    return number1+number2
}

const result =addTwoNumbers(3,5)//arfguments
// console.log("Result: ",result);



function loginUserMessage(username){
    return`${username} just logged in`
}
// console.log(loginUserMessage("puneet"));



function calculatecarPrice(val1 ,val2 ,...num1){
    return num1
}

// console.log(calculatecarPrice(20,400,500,200,500));


const user={
    username :"Puneet",
    price: 99
}

function handleObject(anyobject){
    console.log(`usermane is ${anyobject.username} and price is${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 299
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));


