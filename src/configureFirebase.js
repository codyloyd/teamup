import firebase from 'firebase'
import * as currentUser from './user/currentUser-reducer'
import * as api from './api'

var config = {
  apiKey: 'AIzaSyDAOl7zJ3dEZ93__kjI7CiVPAch4yLU_ZY',
  authDomain: 'teamup-2dbcd.firebaseapp.com',
  databaseURL: 'https://teamup-2dbcd.firebaseio.com',
  storageBucket: 'teamup-2dbcd.appspot.com',
  messagingSenderId: '426969224935'
}

export default dispatch => {
  firebase.initializeApp(config)
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      api.updateUser({...user}).then(user => {
        dispatch(currentUser.signInSuccessful(user))
      })
    } else {
      dispatch(currentUser.signOutSuccessful(user))
    }
  })
}
