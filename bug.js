The Firebase SDKs might sometimes return promises that never resolve or reject, leading to deadlocks in your application. This can happen due to network issues, server-side errors, or bugs within the SDK itself.  It's difficult to debug because standard promise error handling won't catch this specific scenario.  Example (JavaScript):
```javascript
db.ref('path/to/data').once('value').then(snapshot => {
  // This code might never execute if the promise hangs
  console.log(snapshot.val());
}).catch(error => {
  // This error handler won't be called for hanging promises
  console.error(error);
});
```