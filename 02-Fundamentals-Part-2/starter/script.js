// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D")

// function logger() {
//     console.log(`My name is Leon`)
// }

// //calling/ running / invoking function
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges)
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice)


// function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);

// // function expression
// const calcAge2 = function(birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991)
// console.log(age1, age2)

//Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991)
// console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2024 - birthYear;
//     const retirement = 67 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`
// }

// console.log(yearsUntilRetirement(1998, "Leon"))
// console.log(yearsUntilRetirement(1999, "Niclas"))

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
//     return juice;
// }

// console.log(fruitProcessor(2,3));

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear)
//     const retirement = 65 - age;
    
//     if(retirement > 0 && retirement < 65) {
//         console.log(`${firstName} retires in ${retirement} years`)
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired 🎉`)
//         return -1;
//     }
    
//     // return `${firstName} retires in ${retirement} years.`
// }
// console.log(yearsUntilRetirement(2000, "Jonas"))
// console.log(yearsUntilRetirement(1970, "Mike"))

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

// console.log(friends);

// console.log(friends[0])
// console.log(friends[2])

// console.log(friends.length);
// console.log(friends[friends.length -1]);

// friends[2] = "Jay";
// console.log(friends)

// // Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// const friends = ["Michael", "Steven", "Peter"];

// //Add elements
// const newLength = friends.push("Jay")
// console.log(friends)
// console.log(newLength)

// friends.unshift("John");
// console.log(friends)

// //Remove Elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// friends.push(23)
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));

// if (friends.includes("Steven")) {
//     console.log("You have a friend called Steven");
// }

//  console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`)

// const jonas = {
//      firstName: "Jonas",
//      lastName: "Schmedtmann",
//      birthYear: 1991,
//      job: "teacher",
//      friends: ["Michael", "Peter", "Steven"],
//      hasDriversLicense: false,

//      calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//      },
//      getSummary: function() {
//       return `${this.firstName} is a ${this.calcAge()} old ${jonas.job} and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`
//      }
//  };

//  console.log(jonas.calcAge())
//  console.log(jonas.age)

//  //Challenge
// // "Jonas is a 46-year-old teacher, and he has a driver's license" 

// console.log(jonas.getSummary())

// for(let rep = 1; rep <= 10; rep++) {
//    console.log(`Lifting weights repetition ${rep}🏋️‍♂️`)
// }

// const jonas = [
//    'Jonas',
//    'Schmedtmann',
//    2037-1991,
//    'teacher',
//    ['Michael', 'Peter', 'Steven']
// ];

// const types = [];

// for(let i = 0; i < jonas.length ; i++) {
//    // Reading from jonas array
//    console.log(jonas[i])

//    //Filling types array
//    // types[i] = typeof jonas[i];
//    types.push(typeof jonas[i])
// } 

// console.log(types)

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//    2037 - years[i];
//    ages.push(2037 - years[i])
// }

// console.log(ages)

// console.log('--- ONLY STRINGS ---')
// for(let i = 0; i < jonas.length; i++) {
//    if (typeof jonas[i] !== 'string') continue; 
//    console.log(jonas[i], typeof jonas[i]);
// } 

// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < jonas.length; i++) {
//    if (typeof jonas[i] === 'number') break;
//    console.log(jonas[i], typeof jonas[i])
// }

const jonas = [
   'Jonas',
   'Schmedtmann',
   2037-1991,
   'teacher',
   ['Michael', 'Peter', 'Steven'],
]

// 0, 1, ..., 4
// 4 , 3, ..., 0
// for (let i = jonas.length-1; i >= 0; i--) {
//      console.log(i, jonas[i])
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//    console.log(`-------- Starting exercise ${exercise}`)
   
//    for (let rep = 1; rep < 6; rep++) {
//       console.log(`Lifting weights repetition ${rep}`)
//    }
// }


// let rep = 1;
// while (rep <= 10) {
//    console.log(`Lifting weights repetition ${rep}`)
//    rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1

// while (dice !== 6) {
//    console.log(`You rolled a ${dice}`);
//    dice = Math.trunc(Math.random() * 6) + 1;
//    if (dice === 6) {
//       console.log(`Loop is about to end... you got a 6`)
//    }
// }

// function calcAverage(arr) {
//    let sum = 0;
//    for (let i = 0; i < arr.length; i++) {
//        sum += arr[i];
//    }
//    return sum / arr.length
// }
