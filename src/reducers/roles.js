import {combineReducers} from 'redux'

import * as api from '../api'

// ** action types **
const FETCH_ROLES_REQUESTED = 'FETCH_ROLES_REQUESTED'
const FETCH_ROLES_SUCCESSFUL = 'FETCH_ROLES_SUCCESSFUL'
const FETCH_ROLES_FAILED = 'FETCH_ROLES_FAILED'

const CREATE_ROLE_SUCCESSFUL = 'CREATE_ROLE_SUCCESSFUL'

// ** async actions **
export const fetchRoles = projectId => dispatch => {
  dispatch({type: FETCH_ROLES_REQUESTED})
  api.fetchRoles(projectId).then(
    response => {
      dispatch({
        type: FETCH_ROLES_SUCCESSFUL,
        response
      })
    },
    error => {
      dispatch({
        type: FETCH_ROLES_FAILED,
        message: error.message || 'something went wrong'
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
    case FETCH_ROLES_SUCCESSFUL:
      return {...state, ...response}
    case CREATE_ROLE_SUCCESSFUL:
      return {...state, [response.id]: response}
    default:
      return state
  }
}

export const allIds = (state = defaultState.allIds, action) => {
  const {type, response} = action
  switch (type) {
    case FETCH_ROLES_SUCCESSFUL:
      if (!response) return state
      const newIds = Object.keys(response).filter(k => state.indexOf(k) <= 0)
      return [...state, ...newIds]
    case CREATE_ROLE_SUCCESSFUL:
      return [...state, response.id]
    default:
      return state
  }
}

export const isFetching = (state = defaultState.isFetching, action) => {
  const {type} = action
  switch (type) {
    case FETCH_ROLES_REQUESTED:
      return true
    case FETCH_ROLES_SUCCESSFUL:
    case FETCH_ROLES_FAILED:
      return false
    default:
      return state
  }
}

export const errorMessage = (state = defaultState.errorMessage, action) => {
  const {type} = action
  switch (type) {
    case FETCH_ROLES_FAILED:
      return action.message
    case FETCH_ROLES_REQUESTED:
    case FETCH_ROLES_SUCCESSFUL:
      return null
    default:
      return state
  }
}

export default combineReducers({byId, allIds, isFetching, errorMessage})
