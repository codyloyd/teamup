import {combineReducers} from 'redux'

import * as api from '../api'

// ** action types **
const FETCH_APPLICATIONS_REQUESTED = 'FETCH_APPLICATIONS_REQUESTED'
const FETCH_APPLICATIONS_SUCCESSFUL = 'FETCH_APPLICATIONS_SUCCESSFUL'
const FETCH_APPLICATIONS_FAILED = 'FETCH_APPLICATIONS_FAILED'

const CREATE_APPLICATION_SUCCESSFUL = 'CREATE_APPLICATION_SUCCESSFUL'

// ** async actions **
export const fetchApplications = (projectId) => (dispatch) => {
  dispatch({type: FETCH_APPLICATIONS_REQUESTED})
  api.fetchApplications(projectId).then(
    response => {
      dispatch({
        type: FETCH_APPLICATIONS_SUCCESSFUL,
        response
      })
    },
    error => {
      dispatch({
        type: FETCH_APPLICATIONS_FAILED,
        message: error.message || 'applications failed to load'
      })
    }
  )
}

// ** reducers **
const defaultState = {
  byId: {},
  allIds: [],
  isFetching: false,
  errorMessage: null
}

export const byId = (state = defaultState.byId, action) => {
  const {type, response} = action
  switch (type) {
    case FETCH_APPLICATIONS_SUCCESSFUL:
      return {...state, ...response}
    case CREATE_APPLICATION_SUCCESSFUL:
      return {...state, [response.id]: response}
    default:
      return state
  }
}

export const allIds = (state = defaultState.allIds, action) => {
  const {type, response} = action
  switch (type) {
    case FETCH_APPLICATIONS_SUCCESSFUL:
      const ids = Object.keys(response).filter(id => state.indexOf(id) < 0)
      return [...state, ...ids]
    case CREATE_APPLICATION_SUCCESSFUL:
      return [...state, response.id]
    default:
      return state
  }
}

export const isFetching = (state = defaultState.isFetching, action) => {
  const {type} = action
  switch (type) {
    case FETCH_APPLICATIONS_REQUESTED:
      return true
    case FETCH_APPLICATIONS_SUCCESSFUL:
    case FETCH_APPLICATIONS_FAILED:
      return false
    default:
      return state
  }
}

export const errorMessage = (state = defaultState.errorMessage, action) => {
  const {type, message} = action
  switch (type) {
    case FETCH_APPLICATIONS_FAILED:
      return message
    case FETCH_APPLICATIONS_REQUESTED:
    case FETCH_APPLICATIONS_SUCCESSFUL:
      return null
    default:
      return state
  }
}

export default combineReducers({byId, allIds, isFetching, errorMessage})
