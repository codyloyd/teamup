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

export const createApplication = application => {
  return firebase
    .database()
    .ref(`applications/${application.id}`)
    .set(application)
    .then(() => application)
}

// ** users functions **
export const fetchUsers = () => {
  return firebase
    .database()
    .ref('users')
    .once('value')
    .then(data => data.val())
}

export const fetchUser = id => {
  return firebase
    .database()
    .ref(`users/${id}`)
    .once('value')
    .then(data => ({[data.val().id]: data.val()}))
}

export const updateUser = (
  {uid = null, email = '', displayName = '', photoURL = '', providerData = []}
) => {
  return firebase.database().ref(`users/${uid}`).update({
    email,
    displayName,
    photoURL,
    githubUid: providerData[0].uid
  })
}
