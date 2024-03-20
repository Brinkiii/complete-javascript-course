const country = "Germany";
const continent = "Europe";
let language = "german"
let population = 13;
let average = 33;

console.log(population)

console.log(population > 6)

console.log(population > 33)

let description = `${country} is in ${continent} and its ${population} million people speak ${language}.` 
console.log(description)

const age = 15;

if (age >= 18) {
    console.log("Sarah can start driving license")
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 1998;
let century;
if (birthYear <= 2000) {
    let century = 20;
} else {
    let century = 21;
}

if (population > average) {
    console.log(`${country}s population is ${(population - average)} million above average`)
}

const alter = 23;
alter >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to dirnk water 💧')