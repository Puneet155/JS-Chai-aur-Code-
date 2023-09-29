const coding = ["js","ruby","java","python",]


// coding.forEach(function(val){
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })



const myCoding=[
    {
        laungname:"javascript",
        langfile: "js"    },
    {
        laungname:"java",
        langfile: "java"    },
    {
        laungname:"python",
        langfile: "py"    }
]



myCoding.forEach((item) => {
    console.log(item.laungname);
})