import firebase from 'firebase'

var provider = new firebase.auth.GithubAuthProvider()
provider.setCustomParameters({
  'allow_signup': 'true'
})

export const signInWithGithub = () => {
  firebase.auth().signInWithRedirect(provider)
  // I'm returning this promise.. I don't think we'll need it because Redux should handle updating the state.
  return firebase.auth().getRedirectResult().then(result => {
    if (result.credential) {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      // var token = result.credential.accessToken
    }
    // var user = result.user
  }).catch(error => {
    // Handle Errors here.
    var errorCode = error.code
    var errorMessage = error.message
    // The email of the user's account used.
    var email = error.email
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential
    console.log({errorCode, errorMessage, email, credential})
  })
}

export const signOut = () => {
  firebase.auth().signOut().then(() => {
    console.log('signed out')
  }, error => {
    console.log(error)
  })
}
