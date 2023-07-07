---
marp: true
---

# JS Topic: Promises

---

![](https://media0.giphy.com/media/l1J9wZJLPywQuKovK/giphy.gif)

---

## Promises: a solution to callback problems

- Promises have as their goal to make it easier to write asynchronous code
- They are a clever code device to straighten up callback-based code

---

## Promises

- In order to receive the value from a promise, we have to call its `.then()` method, and pass it a callback function.
- `.then()` method makes the distinction between two callbacks:
  - `successCallback` to which it passes a value in case of success
  - `errorCallback` to which it passes an `Error` object.

---

- Initially the Promise is **Pending**.
- Eventually it will **settle** by either being
  - **resolved** (success)
  - **rejected** (error)

```js
const promise = new Promise((resolve, reject) => {
    resolve("done");
    reject(new Error("…")); // ignored
});

// 'resolve' and 'reject' are very much like 'return'
```

---

- **Only one** of `successCallback` or `errorCallback` will ever be called.
- The`errorCallback` is optional, but without it, we need to handle the error ourselves somewhere down the `.then` chain

```js
const isItPizza = (word) => {

    return new Promise((resolve, reject) => {
        
        if (word.toLowerCase() === "pizza") {
            resolve("PIZZAAAAAAAAA!!");
        } 
        else {
            reject("Not pizza :(");
        }
    });
};
```

---

### `Promise` chaining:

- The `.then` method of a Promise returns a **new Promise**.
- The new Promise returned by calling `.then` will settle in the following way, depending on the return value of the `successCallback`:
  - is not a Promise, then the new Promise will be fulfilled with the return value of the `successCallback`.
  - is a Promise, the new Promise will settle in the same way as the Promise returned from the `successCallback`

_Since `.then()` returns a new Promise, this means we can "chain" `.then()` calls to create a waterfall of asynchronous operations._
- chaining takes care of nested callbacks.
- By separating the success and error callbacks, we can more easily reuse functions like `JSON.parse`.
- We don't have to bubble up errors manually anymore.

---

## Example with `fetch`

```js
fetch("/cat-message")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    updateConversation(data.message);
  });

// let's break it down
```

---

- If an error is not handled in a certain `.then`, it will propagate to the new Promise created by `.then`.
- This means that we can write a chain of multiple `.then`s with only `successCallback`s, and tack on a last `.then` at the end with a `null` for `successCallback`, and a generic `errorCallback`.

---

Alternatively, you could just make use of `.catch` which exists exclusively to receive the `errorCallback`.


```js
const isItPizza = (word) => {
    return new Promise((resolve, reject) => {
        if (word.toLowerCase() === "pizza") {
            resolve("PIZZAAAAAAAAA!!");
        } 
        else {
            reject("Not pizza :(");
        }
    });
};

isItPizza("Pizza")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

isItPizza("Apple")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
```

---

We will use Promises over Node-style callbacks wherever possible (i.e. everywhere).

_Many popular NPM libraries will have a Promise-based equivalent._
