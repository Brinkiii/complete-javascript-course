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

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;
    
    if(retirement > 0 && retirement < 65) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`)
        return -1;
    }
    
    // return `${firstName} retires in ${retirement} years.`
}
console.log(yearsUntilRetirement(2000, "Jonas"))
console.log(yearsUntilRetirement(1970, "Mike"))