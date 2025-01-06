To address hanging promises, use `Promise.race` to introduce timeouts.  If the Firebase promise doesn't resolve within the timeout, the timeout promise rejects, triggering the error handling.
```javascript
function fetchDataWithTimeout(path, timeoutMs = 5000) {
  const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Firebase promise timed out')), timeoutMs);
  });

  return Promise.race([db.ref(path).once('value'), timeoutPromise])
    .then(snapshot => {
      if (snapshot instanceof Error) {
        throw snapshot; // Re-throw timeout error
      }
      return snapshot.val();
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      // Handle error appropriately (e.g., show loading error to user)
      throw error; // Re-throw for further handling if needed
    });
}

fetchDataWithTimeout('path/to/data').then(data => {
  // Process data
}).catch(error => {
  // Handle errors
});
```