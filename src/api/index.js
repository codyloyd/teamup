import firebase from 'firebase'
// ** project functions **

// this fetches ALL projects.  may be usefult to limit it later.
export const fetchProjects = () => {
  return firebase.database().ref('projects').once('value').then(data => {
    return data.val()
  })
}

export const createProject = project => {
  return firebase
    .database()
    .ref(`projects/${project.id}`)
    .set(project)
    .then(() => project)
}
// actually.. do we need to fetch individual projects?
// answer: yes 🔥🔥
export const fetchProject = id => {
  return firebase
    .database()
    .ref(`projects/${id}`)
    .once('value')
    .then(data => ({[data.val().id]: data.val()}))
}

// ** role functions **
export const fetchRoles = projectId => {
  return firebase
    .database()
    .ref('roles')
    .orderByChild('projectId')
    .equalTo(projectId)
    .once('value')
    .then(data => data.val())
}

export const createRole = role => {
  return firebase.database().ref(`roles/${role.id}`).set(role).then(() => role)
}

// ** application functions **
export const fetchApplications = projectId => {
  return firebase
    .database()
    .ref('applications')
    .orderByChild('projectId')
    .equalTo(projectId)
    .once('value')
    .then(data => data.val())
}

// ** users functions **
export const fetchUsers = () => {
  return firebase
    .database()
    .ref('users')
    .once('value')
    .then(data => data.val())
}
