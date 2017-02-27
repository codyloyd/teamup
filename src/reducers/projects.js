import {combineReducers} from 'redux'
import * as api from '../api'

// ** action types **
export const FETCH_PROJECTS_REQUESTED = 'FETCH_PROJECTS_REQUESTED'
export const FETCH_PROJECTS_SUCCESSFUL = 'FETCH_PROJECTS_SUCCESSFUL'
export const FETCH_PROJECTS_FAILED = 'FETCH_PROJECTS_FAILED'

// ** action creators **

// don't think we'll need this since it's done by the API lol
// keeping it here momentarily for the sake of documentation.
// export const createProject = ({
//   ownerId = '',
//   name = '',
//   summary = '',
//   tags = [],
//   description = '',
//   roles = [],
//   id = cuid(),
//   status = 'open',
//   timeStamp = Date.now(),
//   lastUpdated = Date.now()
// }) => (
//   {
//     type: CREATE_PROJECT,
//     payload: {
//       id,
//       ownerId,
//       name,
//       summary,
//       tags,
//       description,
//       roles,
//       status,
//       timeStamp,
//       lastUpdated
//     }
//   }
// )

// ** async actions **
// these use thunks
export const fetchProject = (id) => (dispatch) => {
  api.fetchProject(id).then(response => {
    dispatch({
      type: 'FETCH_PROJECT_SUCCESSFUL',
      response
    })
  })
}

const defaultState = {
  byId: {},
  allIds: []
}

export const byId = (state = defaultState.byId, action) => {
  const { type, response } = action
  switch (type) {
    case FETCH_PROJECTS_SUCCESSFUL:
      return {...state, ...response}
    default:
      return state
  }
}


export const projects = combineReducers({byId})
