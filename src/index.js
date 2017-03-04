import React from 'react'
import ReactDOM from 'react-dom'

import root from './components/root'
import './index.css'
import './firebase'
import configureStore from './configureStore'
import appReducer from './reducers'

const Root = root(React)
// these imports are useful for testing.. but I keep them commented
// so that they aren't imported when we aren't using them.
// import * as projects from './reducers/projects'
// import * as roles from './reducers/roles'
// import * as applications from './reducers/applications'
// import * as users from './reducers/users'
import * as currentUser from './reducers/currentUser'
// import * as api from './api'

const store = configureStore(appReducer)

// I have no idea where to put this.
import firebase from 'firebase'
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(currentUser.signInSuccessful(user))
  } else {
    store.dispatch(currentUser.signOutSuccessful(user))
  }
})

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
)
