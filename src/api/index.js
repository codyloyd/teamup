import firebase from 'firebase'

// this fetches ALL projects.  may be usefult to limit it later.
export const fetchProjects = () => {
  return firebase.database().ref('projects').once('value').then(data => {
    return data.val()
  })
}

export const fetchProject = (id) => {
  return firebase.database().ref(`projects/${id}`).once('value').then(data => {
    return data.val()
  })
}
