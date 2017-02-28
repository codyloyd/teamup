# API

at the moment we're using Firebase as our main database, but the goal here is to keep the interface as flexible as possible so that it can be theoretically switched out with another DB in the future.

The Firebase docs are straightforward enough so I won't explain much how to use them here except for one example.

to fetch data from the database use the following:

```javascript
firebase.database().ref('projects')
  .once('value')
  .then(data => data.val())
```

important things here: 
- the `ref()` is the thing you want to fetch, in this case projects.  It is possible to fetch single items by appending an id to the ref: `ref('projects' + id)`
- `once('value')` tells FB that you just want to fetch the data instead of setting up a 'watcher' that automatically updates.  it returns a promise.
- `.then(data => data.val())`: the promise from above is returned as a function, to get the value of the data you're fetching you need to call data.val()  best to do that here in the API implementation rather than when using the method throughout the app... this will keep everything more flexible if we ever get around to deciding to switch up the backend.