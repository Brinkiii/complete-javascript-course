const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// 1.1
// const [firstBook, secondBook] = books;

// console.log(firstBook, secondBook);

// 1.2
// const [, , thirdBook] = books;
// console.log(thirdBook);

// 1.3
// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];

// const [[, rating], [, ratingCount]] = ratings;
// console.log(rating);
// console.log(ratingCount);

// 1.4
// const ratingStars = [63405, 1808];

// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// // 2.1
// const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);

// // 2.2
// const { keywords: tags } = books[0];
// console.log(tags);

// // 2.3
// const { language, programmingLanguage = 'unknown' } = books[6];
// console.log(language, programmingLanguage);

// // 2.4
// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';

// ({ title: bookTitle, author: bookAuthor } = books[0]);
// console.log(bookAuthor);

// // 2.5
// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];
// console.log(bookRating);

// // 2.6
// function printBookInfo({ title, author, year = 'year unknown' }) {
//   console.log(`${title} by ${author}, ${year}`);
// }

// printBookInfo({
//   title: 'Algorithms',
//   author: 'Robert Sedgewick',
// });

// // 3.1
// const bookAuthors = [...books[0].author, ...books[1].author,]
// console.log(bookAuthors)

// // 3.2
// function spellWord(word) {
//   console.log(...word)
// }

// spellWord("Hello")

// // 4.1
// const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest)

// // 4.2
// const {publisher: bookPublisher, ...restOfTheBook} = books[1];
// console.log(bookPublisher, restOfTheBook)

// // 4.3
// function printBookAuthorsCount(title, ...authors) {
//   console.log(`The book "${title}" has ${authors.length} authors.`)
// }

// printBookAuthorsCount("Algorithms", "Robert Sedgewick", "Kevin Wayne")

// // 5.1
// function hasExamplesInJava(book) {
//   return book.programmingLanguage === "Java" || "no data available"
// }

// console.log(hasExamplesInJava(books[0]))

// // 5.2
// for (let i = 0; i<books.length; i++) {
//   books[i].onlineContent && console.log(`${books[i].title} provides online content`);
// }

// // 6.1
// for (let i = 0; i<books.length; i++) {
//   books[i].onlineContent ?? console.log(`${books[i].title} provides no online content`);
// }

// // 7.1
// for (let i = 0; i<books.length; i++) {
//   books[i].edition ||= 1;
// }

// // 7.2
// for (let i = 0; i<books.length; i++) {
//   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2)
// }

// // 8.1
// let pageSum = 0;
// for (let book of books) {
//   pageSum += book.pages;
// }

// console.log(pageSum)

// // 8.2
// const allAuthors = [];
// for (let book of books) {
//   allAuthors.push(book.author);
//   if (typeof(book.author) === "object") {
//     allAuthors.push(...book.author);
//   } else {
//     allAuthors.push(book.author)
//   }
// }
// console.log(allAuthors)

// // 8.3
// for (const [i, author] of allAuthors.entries()) {
//   console.log(`${i +1}: ${author}`)
// }

// // 9.1
// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1]
// };

// // 9.2
// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//   pages
// };

// // 10.1
// function getFirstKeyword(book) {
//   console.log(book.keywords?.[0])
// }

// getFirstKeyword(books[0])

// // 11.1
// const entries = [];

// // console.log(Object.keys(books[0].thirdParty.goodreads))

// for (key of Object.keys(books[0].thirdParty.goodreads)) {
//   entries.push([key])
// }
// // console.log(entries)

// // 11.2
// for (const [index, value] of Object.values(books[0].thirdParty.goodreads).entries()) {
//   entries[index].push(value);
// }
// // console.log(entries)

// // 11.3
// const entries2 = Object.entries(books[0].thirdParty.goodreads);

// // 11.4
// console.log(entries)
// console.log(entries2)

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

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

// // 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

// for (const [goal, player] of game.scored.entries()) {
//   console.log(`Goal ${goal + 1}: ${player}`)
// }

// // 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

// const oddValues = Object.values(game.odds);
// let average = 0;
// for (odd of oddValues) {
//   average += odd;
// }

// average = average / oddValues.length;
// console.log(average)

// // 3. Print the 3 odds to the console, but in a nice formatted way

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === `x` ? `draw` : `Victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`)
// }

// //  BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// // {
// //   Gnarby: 1,
// //   Hummels: 1,
// //   Lewandowski: 2
// // }

// const scorers = {}

// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1)
// }

// console.log(scorers)

// // 12.1
// const allKeywords = [];
// for (const book of books) {
//   allKeywords.push(...book.keywords)
// }
// console.log(allKeywords)

// // 12.2
// const uniqueKeywords = new Set(allKeywords);
// console.log(uniqueKeywords)

// // 12.3
// uniqueKeywords.add("coding")
// uniqueKeywords.add("science")
// console.log(uniqueKeywords)

// // 12.4
// uniqueKeywords.delete("business");
// console.log(uniqueKeywords)

// // 12.5
// const uniqueKeywordsArr = [...uniqueKeywords]
// console.log(uniqueKeywordsArr)

// // 12.6
// uniqueKeywords.clear();
// console.log(uniqueKeywords)

// // 13.1
// const bookMap = new Map([
//   ['title', 'Clean Code'],
//   ['author', 'Robert C. Martin'],
// ]);

// // 13.2
// bookMap.set('pages', 464);
// console.log(bookMap);

// // 13.3
// console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);

// // 13.4
// console.log(bookMap.size);

// // 13.5
// if (bookMap.has('author')) console.log('The author is known');

// // 14.1
// const firstBookMap = new Map(Object.entries(books[0]));
// console.log(firstBookMap);

// // 14.2
// for (const [numberKeys, value] of firstBookMap) {
//   if (typeof value === 'number') console.log(numberKeys);
// }

// // 15.1
// console.log(books[0].ISBN['6']);
// console.log(books[0].ISBN['4']);
// console.log(books[0].ISBN['9']);
// console.log(books[0].ISBN['8']);

// // 15.2
// const quote =
//   'A computer once beat me at chess, but it was no match for me at kick boxing';
// console.log(quote.indexOf('chess'));

// // 15.3
// console.log(quote.slice(quote.lastIndexOf(' ') + 1));

// // 15.4
// function isContributor(authorName) {
//   authorName.slice(authorName.lastIndexOf(' ') + 1) === '(Contributor)'
//     ? console.log(true)
//     : console.log(false);
// }

// function isContributorJonas(authorName) {
//   return authorName.lastIndexOf('(Contributor)') !== -1;
// }

// isContributor('Julia Sussman (Contributor)');
// isContributorJonas('Julia Sussman (Contributor)');

// const test = 'Test String mit Last Index';
// console.log(test.lastIndexOf(' '));

// // 16.1
// const normalizeAuthorName = function (author) {
//   const lowerName = author.toLowerCase().trim().replace('(contributor)', '');
//   const firstName =
//     lowerName[0].toUpperCase() + lowerName.slice(1, lowerName.indexOf(' '));
//   const lastName =
//     lowerName[lowerName.indexOf(' ') + 1].toUpperCase() +
//     lowerName.slice(lowerName.indexOf(' ') + 2);
//   console.log(`${firstName} ${lastName}`);
// };

// normalizeAuthorName('JuLIA sAssman (Contributor)');

// // 16.2
// // const title = books[1].title;
// // console.log(title);
// // const newBookTitle = title.replace('Programs', 'Software');
// // console.log(newBookTitle);
// const newBookTitle = books[1].title.replace('Programs', 'Software');

// // 16.3
// function logBookTheme(title) {
//   title = title.toLowerCase();
//   if (title.startsWith('computer')) {
//     console.log('This book is about computers');
//   } else if (title.includes('algorithms') && title.includes('structures')) {
//     console.log('This book is about algorithms and data structures');
//   } else if (
//     title.endsWith('systems') ||
//     (title.endsWith('system') && !title.includes('operating'))
//   ) {
//     console.log(
//       'This book is about some systems, but definitely not operating systems.'
//     );
//   }
// }
// console.log(logBookTheme('Algorithms and data structures'));

// // 17.1
// const bookCategories =
//   'science;computing;computer science;algorithms;business;operating systems;networking;electronics';

// function logBookCategories(categories) {
//   const split = categories.split(';');
//   for (const n of split) {
//     console.log(n);
//   }
// }
// logBookCategories(bookCategories);

// 17.2
function getKeywordsAsString(books) {
  const keywords = [];
  for (const book of books) {
    keywords.push(...book.keywords);
  }
  // const keywordsSet = new Set(keywords);
  // console.log(Array.from(keywordsSet).join(';'));
  const uniqueKeywords = [...new Set(keywords)];
  return uniqueKeywords.join(';');
}

console.log(getKeywordsAsString(books));

// 17.3
const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];
function logBookChapters(arr) {
  for (const [title, pages] of arr) {
    console.log(`${title.padEnd(16, '_')}${pages}`);
  }
}

logBookChapters(bookChapters);
