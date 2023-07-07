// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: '<MY_API_KEY>',
    q: '<QUERY_STRING>',
  };

  // return something...
};

getPositionFromAddress(
  '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
).then((response) => console.log(response));
