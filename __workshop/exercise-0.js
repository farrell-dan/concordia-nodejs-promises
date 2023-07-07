// Exercise 0 (Example)
// ----------
// Write a function compareToTen that takes a number as an argument and returns
// a Promise that tests if the value is less than or greater than the value 10.

const compareToTen = (num) => {
  const myPromise = new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(num + ' is greater than 10, success!');
    } else {
      reject(num + ' is less than 10, error!');
    }
  });
  return myPromise;
};

// Calling the Promise
compareToTen(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

compareToTen(8)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
