// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

const getAddressFromPosition = (lat, lng) => {
  const requestObj = {
    key: '<MY_API_KEY>',
    q: '<QUERY_STRING>',
  };

  // return ...
}

getAddressFromPosition('48.8584', '2.2945').then((response) =>
  console.log(response)
);
