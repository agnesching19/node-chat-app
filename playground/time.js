const moment = require('moment');

// const date = new Date();
// console.log(date.getDate());

const someTimeStamp = moment().valueOf();
console.log(someTimeStamp);

const createdAt = 1234;
const date = moment(createdAt);
// date.add(1, 'year').subtract(5, 'months');
console.log(date.format('HH:mm DD/MMM/YYYY'));

console.log(date.format('h:mm a'));
