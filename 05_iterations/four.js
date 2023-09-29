const myObject={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'

}

for (const key in myObject) {
   //console.log(myObject[key]);
console.log(`${key} is shortcut for ${myObject[key]}`);

}

const programming = ["js", "rb","py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
    
}

const map = new Map()
map.set('IN',"India")
map.set('US',"United State of America")
map.set('Fr',"France")

console.log(map);

for (const [key,value] in map) {
    console.log((key,':-',value));
    
}