import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyDAOl7zJ3dEZ93__kjI7CiVPAch4yLU_ZY',
  authDomain: 'teamup-2dbcd.firebaseapp.com',
  databaseURL: 'https://teamup-2dbcd.firebaseio.com',
  storageBucket: 'teamup-2dbcd.appspot.com',
  messagingSenderId: '426969224935'
}

export default firebase.initializeApp(config)
