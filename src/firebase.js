import firebase from 'firebase'
import * as currentUser from './reducers/currentUser'

var config = {
  apiKey: 'AIzaSyDAOl7zJ3dEZ93__kjI7CiVPAch4yLU_ZY',
  authDomain: 'teamup-2dbcd.firebaseapp.com',
  databaseURL: 'https://teamup-2dbcd.firebaseio.com',
  storageBucket: 'teamup-2dbcd.appspot.com',
  messagingSenderId: '426969224935'
}


export default (dispatch) => {
  firebase.initializeApp(config)
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      dispatch(currentUser.signInSuccessful(user))
    } else {
      dispatch(currentUser.signOutSuccessful(user))
    }
  })
}
