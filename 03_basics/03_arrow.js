const user = {
    username: "Puneet ",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
    }

}

// user.welcomeMessage()
// user.username = "puneet"
// user.welcomeMessage()

// console.log(this);
                                                                                                                                          

// function chai(){
//     console.log(this);
//     console.log(this).username;//undefined 
// }

// chai()


// 





const chai = ()=>{
    let username = "PUNEET "
    console.log(this);
}


//chai()

// const addTwo =(num1,num2) => {  //explicit
//     return num1+num2
// }


//const addTwo = (num1 , num2 ) => num1+num2 //implicit

//const addTwo = (num1,num2) => ( num1 + num2 )




const addTwo = (num1,num2) => ( {username : "Puneet "} )

console.log(addTwo(3,4));