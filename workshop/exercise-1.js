// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  // write some code
    return new Promise((resolve, reject) => {
      if (Array.isArray(array)) {
        const capitalizedWords = array.map((word) => {
          if (typeof word === "string") {
            return word.toUpperCase();
          } else {
            reject("array should contain only strings.");
          }
        });
        resolve(capitalizedWords);
      } else {
        reject("input should be an array.");
      }
    });
};

const sortWords = (array) => {
  // write some code
    return new Promise((resolve, reject) => {
      if (Array.isArray(array)) {
        const sortedWords = array.sort();
        resolve(sortedWords);
      } else {
        reject("input should be an array.");
      }
    });
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
