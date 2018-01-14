//Jan 1st 1970 00:00:00 am
var moment=require('moment');
// var date=new Date();
// var months=['Jan','Feb'];
// console.log(date.getMonth());

var someTimestamp=moment().valueOf();
console.log(someTimestamp);

var createdAt=1234;
var time=moment(1234);
console.log(time.format('h:mm a'));
