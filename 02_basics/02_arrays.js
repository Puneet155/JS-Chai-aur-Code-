const marvelHeros = ["thor", "ironman" , "Spiderman"]
const dcheroes = ["superman", "flash", "batman"]

// marvelHeros.push(dcheroes)
// console.log(marvelHeros);
const allHeros = marvelHeros.concat(dcheroes)
// console.log(allHeros);

// const allnewheroes= [...marvelHeros,...dcheroes]

const another_array = [1,2,3,4,[4,5,6],7,[6,7,[8,9]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Puneet"));
console.log(Array.from("Puneet"));
console.log(Array.from({name: "Puneet"}));


let score1=100
let score2=100
let score3=100

console.log(Array.of(score1,score2,score3));