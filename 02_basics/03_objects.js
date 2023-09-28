//object

//singleton

// object literals
//Object.create


const mySym =Symbol("key1")
const JsUser ={

    name: "Puneet",
    "full name ": "PUNEET VISHWAKARMA",
    [mySym]: "mykey1",
    age: 22,
    Location: 'jaipur',
    email: "puneet155p@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","Saturday"]


}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullname"]);
// console.log(JsUser[mySym]);


JsUser.email = " chala ja mNA KGDIeqgd p78ER P7"
// Object.freeze(JsUser)
JsUser.email = " no chaneg "
// console.log(JsUser);



JsUser.greetings = function(){
    console.log("hello JS user");
}
JsUser.greetingstwo = function(){
    console.log(`hello JS user,${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingstwo());
