const airline = `TAP Air Portugal`;
const plane = `A320`;

// PART 1
// console.log(plane[0]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B730'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   s === 'B' || s === 'E'
//     ? console.log('The seat in question is a middle seat.')
//     : console.log('The seat in question is NOT a middle seat.');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('11C');
// checkMiddleSeat('11E');
// checkMiddleSeat('11F');

// PART 2
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'LeOn'; // Leon
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

function correctPassengerName(name) {
  const nameLower = name.toLowerCase();
  const correctName = nameLower[0].toUpperCase() + nameLower.slice(1);
  console.log(correctName);
}

correctPassengerName('TANjA');
correctPassengerName('leOn BriInkmann');

// function correctPassengerNameMultiple(name) {
//   const split = name.split(' ');
//   const firstName = split[0];
//   const lastName = split[1];
//   const lowerFirstName = firstName.toLowerCase();
//   const lowerLastName = lastName.toLowerCase();
//   const correctName =
//     lowerFirstName[0].toUpperCase() +
//     lowerFirstName.slice(1) +
//     ' ' +
//     lowerLastName[0].toUpperCase() +
//     lowerLastName.slice(1);
//   console.log(correctName);
// }

// correctPassengerNameMultiple('TANjA SeifERt');

function correctPassengerNameMultiple(name) {
  const words = name.split(' '); // Split the name into an array of words
  console.log(words);
  const correctedWords = words.map(word => {
    const lowerWord = word.toLowerCase(); // Convert the word to lowercase
    return lowerWord[0].toUpperCase() + lowerWord.slice(1); // Capitalize the first letter
  });
  const correctedName = correctedWords.join(' '); // Join the words back into a single string
  console.log(correctedName);
}

correctPassengerNameMultiple('LEOn BriNkmann');

// Compaing emails
const email = 'hello@leon.io';
const loginEmail = '   Hello@Leon.Io ';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEMail = loginEmail.toLowerCase().trim();
console.log(normalizedEMail);
console.log(email === normalizedEMail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'));

// Booleans
const newPlane = 'Airbus A320neo';
console.log(newPlane.includes('A320'));
console.log(newPlane.startsWith('A32'));

if (newPlane.startsWith('Airbus') && newPlane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Pracitce exercise
// const checkBaggage = function (items) {
//   items.toLowerCase();
//   if (items.includes('gun') || items.includes('pocket knife')) {
//     console.log('NOPE!');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  baggage.includes('gun') || baggage.includes('pocket knife')
    ? console.log('Nope!')
    : console.log('Welcome aboard!');
};

checkBaggage('I have a laptop, some food and a pocket knife');
checkBaggage('Socks and Camera');
checkBaggage('Gomt some snacks and a Gun for protection');

console.log('a+very+nice+string'.split('+'));
console.log('Leon Brinkmann'.split(' '));

const [firstName, lastName] = 'Leon Brinkmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('leon brinkmann');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4231231325234234));
console.log(maskCreditCard(42331234));
console.log(maskCreditCard('21315354363463463634'));

// Repeat
const message2 = 'Bad weather... all departures delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
