# Promise.resolve

`Promise.resolve` is a method that returns a Promise object that is resolved with a given value. If the value is a promise, it will be returned as-is. If the value is not a promise, it will be wrapped in a resolved promise.

### Example Usage

```javascript
let value = 42;

// Create a resolved promise with the given value
let promise = Promise.resolve(value);

promise.then((result) => {
    console.log(result); // Output: 42
});
