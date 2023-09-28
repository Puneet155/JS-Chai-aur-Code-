const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Puneet"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "puneet15p",
    fullname:{
        userfullname:{
            firstnmae: "Puneet",
        lastname:" Vishwakarma"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstnmae);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

//const obj3={ obj1,obj2}
// const obj3 = Object.assign({}, obj1 , obj2,obj4)
const obj3 = {...obj1,...obj2}

// console.log(obj3);


const users=[
    {
        id: 1,
        email: "puneet155p.com"
    },
    {
        id: 2,
        email: "puneet155p.com"
    },
    {
        id: 1,
        email: "puneet155p.com"
    },
    {
        id: 1,
        email: "puneet155p.com"
    },
    {
        id: 1,
        email: "puneet155p.com"
    },
]



users[1].emaiil

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



//destructuring

const course={
    coursename:"js hindi",
    price :"999",
    coueseInstructor: "puneet"
}


const {coueseInstructor : instructor} =course
console.log(instructor);


// const navbar =  ({company}) =>{


// }

// navbar(company = "puneet")

//json
// {
//     name:"puneet",
//     coursename:"jshindi",
//     price:"free"

// }



