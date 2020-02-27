//how to import HTML of other websites
const request = require('request');
request('http://www.google.com', (error, reponse, body) => {
    console.log(`body: ${body}`);

})
// end of how to import HTML of other websites
// let something = require('./log')
// // log object is being set equal to something
// something.info('The weather is nice')


// //I did this by myself 
// let practice = require('./myString')
// console.log(practice)
