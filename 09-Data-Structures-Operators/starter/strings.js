const airline = `TAP Air Portugal`;
const plane = `A320`;

console.log(plane[0]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B730'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
