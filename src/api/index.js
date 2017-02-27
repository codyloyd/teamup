import firebase from 'firebase'

// this fetches ALL projects.  may be usefult to limit it later.
export const fetchProjects = () => {
  return firebase.database().ref('projects').once('value').then(data => {
    return data.val()
  })
}

export const createProject = (project) => {
  return firebase.database().ref(`projects/${project.id}`).set(project)
    .then(() => project)
}

// actually.. do we need to fetch individual projects?
// no reason to toss this method just yet.. but I'm not sure
// we're going to need it because all the projects
// are going to be in the store anyway
export const fetchProject = (id) => {
  return firebase.database().ref(`projects/${id}`).once('value').then(data => {
    return data.val()
  })
}
