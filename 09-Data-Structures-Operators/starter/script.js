'use strict';

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5 ]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3},`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};


// PROPERTY NAMES
const properties = Object.keys(openingHours)
console.log(properties)

let openStr = `We are open on ${properties.length} days: `

for (const day of properties) {
  openStr += `${day}, `
}

// console.log(openStr)

// PROPERTY VALUES
const values = Object.values(openingHours)
// console.log(values)

// ENTIRE OBJECT
const entries = Object.entries(openingHours);
// console.log(entries)

for(const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`)
}

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// }

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// }

// if (restaurant.openingHours && restaurant.openingHours.mon) 
//   console.log(restaurant.openingHours.mon.open)


// console.log(restaurant.openingHours.mon?.open)
// console.log(restaurant.openingHours?.mon?.open)

// const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
// for(const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed'
//   console.log(`On ${day} we open at ${open}`)
// }

// const users = [
//   {
//     name: "Leon", 
//     email: "leonbrinkmann14@gmail.com"
//   }
// ];

// console.log(users[0]?.name ?? "User array empty")

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest2.owner = rest2.owner && '<ANONYMOUS>'
// rest1.owner &&= '<ANONYMOUS>'
// rest2.owner &&= '<ANONYMOUS>'

// console.log(rest1)
// console.log(rest2)
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);
// for (const [i, el] of menu.entries()) {
//   console.log(`${i  + 1}: ${el}`)
// }




// restaurant.orderPizza(`Mushroom`, `Olive`, `spinach`);


// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// Default Values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating Variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// // console.log(newArr);
// // console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// // console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Ingredient 2?`),
//   prompt(`Ingredient 3?`),
// ];

// restaurant.orderPasta(...ingredients);

//Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// // SPREAD, because on RIGHT side of =
// const array = [1, 2, ...[3, 4]];

// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // OBjects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// console.log("---OR---")
// console.log(3 || "Jonas")

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2=restaurant.numGuests || 10
// console.log(guests2)

// console.log("---AND---")
// console.log(0 && "Jonas")
// console.log(7 && "Jonas")
// console.log("hello" && 23 && null && "Jonas")

// if(restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "spinach")
// }

// restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach")

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starterCourse, mainCourse] = restaurant.order(2, 0);
// console.log(starterCourse, mainCourse);

// Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default Values

// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);
// // // // // Data needed for a later exercise
// // // // const flights =
// // // //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [days[3]]: {
//     open: 0,
//     close: 22,
//   },
//   [days[4]]: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 9,
//     close: 23,
//   },
// };

// // // // // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   openingHours,
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },
// };

// // // // let [main, , secondary] = restaurant.categories;
// // // // console.log(main, secondary);

// // // // // Switching variables
// // // // // const temp = main;
// // // // // main = secondary;
// // // // // secondary = temp;
// // // // // console.log(main, secondary);

// // // // [main, secondary] = [secondary, main];
// // // // console.log(main, secondary);

// // // // const [starter, mainCourse] = restaurant.order(2, 0);
// // // // console.log(starter, mainCourse);

// // // // [restaurant.openingHours].forEach(element => {
// // // //   console.log(restaurant.openingHours);
// // // // });

// // // const books = [
// // //   {
// // //     title: 'Algorithms',
// // //     author: ['Robert Sedgewick', 'Kevin Wayne'],
// // //     publisher: 'Addison-Wesley Professional',
// // //     publicationDate: '2011-03-24',
// // //     edition: 4,
// // //     keywords: [
// // //       'computer science',
// // //       'programming',
// // //       'algorithms',
// // //       'data structures',
// // //       'java',
// // //       'math',
// // //       'software',
// // //       'engineering',
// // //     ],
// // //     pages: 976,
// // //     format: 'hardcover',
// // //     ISBN: '9780321573513',
// // //     language: 'English',
// // //     programmingLanguage: 'Java',
// // //     onlineContent: true,
// // //     thirdParty: {
// // //       goodreads: {
// // //         rating: 4.41,
// // //         ratingsCount: 1733,
// // //         reviewsCount: 63,
// // //         fiveStarRatingCount: 976,
// // //         oneStarRatingCount: 13,
// // //       },
// // //     },
// // //     highlighted: true,
// // //   },
// // //   {
// // //     title: 'Structure and Interpretation of Computer Programs',
// // //     author: [
// // //       'Harold Abelson',
// // //       'Gerald Jay Sussman',
// // //       'Julie Sussman (Contributor)',
// // //     ],
// // //     publisher: 'The MIT Press',
// // //     publicationDate: '2022-04-12',
// // //     edition: 2,
// // //     keywords: [
// // //       'computer science',
// // //       'programming',
// // //       'javascript',
// // //       'software',
// // //       'engineering',
// // //     ],
// // //     pages: 640,
// // //     format: 'paperback',
// // //     ISBN: '9780262543231',
// // //     language: 'English',
// // //     programmingLanguage: 'JavaScript',
// // //     onlineContent: false,
// // //     thirdParty: {
// // //       goodreads: {
// // //         rating: 4.36,
// // //         ratingsCount: 14,
// // //         reviewsCount: 3,
// // //         fiveStarRatingCount: 8,
// // //         oneStarRatingCount: 0,
// // //       },
// // //     },
// // //     highlighted: true,
// // //   },
// // //   {
// // //     title: "Computer Systems: A Programmer's Perspective",
// // //     author: ['Randal E. Bryant', "David Richard O'Hallaron"],
// // //     publisher: 'Prentice Hall',
// // //     publicationDate: '2002-01-01',
// // //     edition: 1,
// // //     keywords: [
// // //       'computer science',
// // //       'computer systems',
// // //       'programming',
// // //       'software',
// // //       'C',
// // //       'engineering',
// // //     ],
// // //     pages: 978,
// // //     format: 'hardcover',
// // //     ISBN: '9780130340740',
// // //     language: 'English',
// // //     programmingLanguage: 'C',
// // //     onlineContent: false,
// // //     thirdParty: {
// // //       goodreads: {
// // //         rating: 4.44,
// // //         ratingsCount: 1010,
// // //         reviewsCount: 57,
// // //         fiveStarRatingCount: 638,
// // //         oneStarRatingCount: 16,
// // //       },
// // //     },
// // //     highlighted: true,
// // //   },
// // //   {
// // //     title: 'Operating System Concepts',
// // //     author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
// // //     publisher: 'John Wiley & Sons',
// // //     publicationDate: '2004-12-14',
// // //     edition: 10,
// // //     keywords: [
// // //       'computer science',
// // //       'operating systems',
// // //       'programming',
// // //       'software',
// // //       'C',
// // //       'Java',
// // //       'engineering',
// // //     ],
// // //     pages: 921,
// // //     format: 'hardcover',
// // //     ISBN: '9780471694663',
// // //     language: 'English',
// // //     programmingLanguage: 'C, Java',
// // //     onlineContent: false,
// // //     thirdParty: {
// // //       goodreads: {
// // //         rating: 3.9,
// // //         ratingsCount: 2131,
// // //         reviewsCount: 114,
// // //         fiveStarRatingCount: 728,
// // //         oneStarRatingCount: 65,
// // //       },
// // //     },
// // //   },
// // //   {
// // //     title: 'Engineering Mathematics',
// // //     author: ['K.A. Stroud', 'Dexter J. Booth'],
// // //     publisher: 'Palgrave',
// // //     publicationDate: '2007-01-01',
// // //     edition: 14,
// // //     keywords: ['mathematics', 'engineering'],
// // //     pages: 1288,
// // //     format: 'paperback',
// // //     ISBN: '9781403942463',
// // //     language: 'English',
// // //     programmingLanguage: null,
// // //     onlineContent: true,
// // //     thirdParty: {
// // //       goodreads: {
// // //         rating: 4.35,
// // //         ratingsCount: 370,
// // //         reviewsCount: 18,
// // //         fiveStarRatingCount: 211,
// // //         oneStarRatingCount: 6,
// // //       },
// // //     },
// // //     highlighted: true,
// // //   },
// // //   {
// // //     title: 'The Personal MBA: Master the Art of Business',
// // //     author: 'Josh Kaufman',
// // //     publisher: 'Portfolio',
// // //     publicationDate: '2010-12-30',
// // //     keywords: ['business'],
// // //     pages: 416,
// // //     format: 'hardcover',
// // //     ISBN: '9781591843528',
// // //     language: 'English',
// // //     thirdParty: {
// // //       goodreads: {
// // //         rating: 4.11,
// // //         ratingsCount: 40119,
// // //         reviewsCount: 1351,
// // //         fiveStarRatingCount: 18033,
// // //         oneStarRatingCount: 1090,
// // //       },
// // //     },
// // //   },
// // //   {
// // //     title: 'Crafting Interpreters',
// // //     author: 'Robert Nystrom',
// // //     publisher: 'Genever Benning',
// // //     publicationDate: '2021-07-28',
// // //     keywords: [
// // //       'computer science',
// // //       'compilers',
// // //       'engineering',
// // //       'interpreters',
// // //       'software',
// // //       'engineering',
// // //     ],
// // //     pages: 865,
// // //     format: 'paperback',
// // //     ISBN: '9780990582939',
// // //     language: 'English',
// // //     thirdParty: {
// // //       goodreads: {
// // //         rating: 4.7,
// // //         ratingsCount: 253,
// // //         reviewsCount: 23,
// // //         fiveStarRatingCount: 193,
// // //         oneStarRatingCount: 0,
// // //       },
// // //     },
// // //   },
// // //   {
// // //     title: 'Deep Work: Rules for Focused Success in a Distracted World',
// // //     author: 'Cal Newport',
// // //     publisher: 'Grand Central Publishing',
// // //     publicationDate: '2016-01-05',
// // //     edition: 1,
// // //     keywords: ['work', 'focus', 'personal development', 'business'],
// // //     pages: 296,
// // //     format: 'hardcover',
// // //     ISBN: '9781455586691',
// // //     language: 'English',
// // //     thirdParty: {
// // //       goodreads: {
// // //         rating: 4.19,
// // //         ratingsCount: 144584,
// // //         reviewsCount: 11598,
// // //         fiveStarRatingCount: 63405,
// // //         oneStarRatingCount: 1808,
// // //       },
// // //     },
// // //     highlighted: true,
// // //   },
// // // ];

// // // // const ingredients = [
// // // //   prompt(`Let's make pasta!
// // // // Ingredient 1?`),
// // // //   prompt(`Ingredient 2?`),
// // // //   prompt(`Ingredient 3?`),
// // // // ];

// // // // restaurant.orderPasta(...ingredients);

// // // // restaurant.numGuests = 0;
// // // // const guests = restaurant.numGuests || 10;
// // // // console.log(guests);

// // // // // Nullish: null and undefinded (NOT 0 or '')

// // // // const guestCorect = restaurant.numGuests ?? 10;
// // // // console.log(guestCorect);

// // // const rest1 = {
// // //   name: 'Capri',
// // //   numGuests: 20,
// // // };

// // // const rest2 = {
// // //   name: 'La Piazza',
// // //   owner: 'Giovanni Rossi',
// // // };

// // // // OR Assignment Operator
// // // // rest1.numGuests = rest1.numGuests || 10;
// // // // rest2.numGuests = rest2.numGuests || 10;

// // // rest1.numGuests ??= 10;
// // // rest2.numGuests ??= 10;

// // // rest2.owner = rest2.owner && '<ANONYMOUS>';

// // // console.log(rest1);
// // // console.log(rest2);

// // ///////////////////////////////////////
// // // Coding Challenge #1

// // /*
// // We're building a football betting app (soccer for my American friends 😅)!

// // Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// // 1. Create one player array for each team (variables 'players1' and 'players2')
// // 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// // TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// // GOOD LUCK 😀 */

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// const [players1, players2] = game.players;

// // 2.
// const [gk, ...fieldPlayers] = players1;

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// // 6.
// function printGoals(...players) {
//   console.log(`${players.length} goals were scored`);
// }

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// team1 < team2 ? console.log('Team 1 wins') : console.log('Team 2 wins');
