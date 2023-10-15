// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

const getPositionFromAddress = (address) => {
  return new Promise((resolve, reject) => {
    const requestObj = {
      key: "295c76d1aba24cd7954914b154edf0c9",
      q: address,
    };

    // return something...

    opencage
      .geocode(requestObj)
      .then((data) => {
        if (data && data.results && data.results.length > 0) {
          const { geometry } = data.results[0];
          const { lat, lng } = geometry;
          resolve({ lat, lng });
        } else {
          reject("Address not found.");
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

getPositionFromAddress(
  '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
).then((response) => console.log(response));

getPositionFromAddress(
  "909 Av. des Canadiens-de-Montréal, Montréal, QC H3B 5E8"
).then((response) => console.log(response));