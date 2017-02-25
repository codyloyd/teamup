import firebase from 'firebase'

export const fetchProjects = () => {
  return firebase.database().ref('projects').once('value').then(data => {
    return data.val()
  })
}

export default {
  fetchProjects
}
