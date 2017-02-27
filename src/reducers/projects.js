import {combineReducers} from 'redux'
import * as api from '../api'

// ** action types **
export const FETCH_PROJECTS_REQUESTED = 'FETCH_PROJECTS_REQUESTED'
export const FETCH_PROJECTS_SUCCESSFUL = 'FETCH_PROJECTS_SUCCESSFUL'
export const FETCH_PROJECTS_FAILED = 'FETCH_PROJECTS_FAILED'

export const FETCH_PROJECT_SUCCESSFUL = 'FETCH_PROJECT_SUCCESSFUL'

// ** action creators **

// ** async actions **
// these use thunks
export const fetchProject = (id) => (dispatch) => {
  api.fetchProject(id).then(response => {
    dispatch({
      type: FETCH_PROJECT_SUCCESSFUL,
      response
    })
  })
}

export const fetchProjects = () => (dispatch) => {
  dispatch({type: FETCH_PROJECTS_REQUESTED})
  api.fetchProjects().then(
    response => {
      dispatch({
        type: FETCH_PROJECTS_SUCCESSFUL,
        response
      })
    },
    error =>  {
      dispatch({
        type: FETCH_PROJECTS_FAILED,
        message: error.message || 'something went wrong'
      })
    }
  )
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

export const isFetching = (state = false, action) => {
  const { type } = action
  switch (type) {
    case FETCH_PROJECTS_REQUESTED:
      return true
    case FETCH_PROJECTS_SUCCESSFUL:
    case FETCH_PROJECTS_FAILED:
      return false
    default:
      return state
  }
}

export const errorMessage = (state = null, action) => {
  const { type } = action
  switch (type) {
    case FETCH_PROJECTS_FAILED:
      return action.message
    case FETCH_PROJECTS_REQUESTED:
    case FETCH_PROJECT_SUCCESSFUL:
      return null
    default:
      return state
  }
}

export default combineReducers({byId, isFetching, errorMessage})
