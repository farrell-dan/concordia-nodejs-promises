// Exercise 2.1 - Testing
// ----------------------

// require the 'request-promise' module.
const request = require('request-promise');

const testGreeting = () => {
  return request('<API_URL') // 1
    .then((response) => {
      return; // 2
    })
    .then((parsedResponse) => {
      return; // 3
    })
    .catch((err) => console.log('Error: ', err));
};

testGreeting().then((result) => console.log(result));
