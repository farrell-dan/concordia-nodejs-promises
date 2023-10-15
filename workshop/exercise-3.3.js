// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

const getAddressFromPosition = (lat, lng) => {
  return new Promise((resolve, reject) => {
      const requestObj = {
        key: "295c76d1aba24cd7954914b154edf0c9",
        q: `${lat},${lng}`,
      };

       opencage
      .geocode(requestObj)
      .then((data) => {
        if (data && data.results && data.results.length > 0) {
          const { formatted } = data.results[0];
          resolve(formatted);
        } else {
          reject("Address not found.");
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

getAddressFromPosition('48.8584', '2.2945').then((response) =>
  console.log(response)
);
