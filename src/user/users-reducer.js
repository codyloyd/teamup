import {combineReducers} from 'redux'
import * as api from '../api'
import {SIGN_IN_SUCCESSFUL} from './currentUser-reducer'
// ** action types
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCESSFUL = 'FETCH_USERS_SUCCESSFUL'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

// ** action creators **
export const fetchUsersSuccessful = response => ({
  type: FETCH_USERS_SUCCESSFUL,
  response
})

export const fetchUsersRequested = () => ({
  type: FETCH_USERS_REQUESTED
})

export const fetchUsersFailed = message => ({
  type: FETCH_USERS_FAILED,
  message
})

// ** async actions **
export const fetchUsers = () =>
  dispatch => {
    dispatch(fetchUsersRequested())
    api.fetchUsers().then(
      response => {
        dispatch(fetchUsersSuccessful(response))
      },
      error => {
        dispatch(fetchUsersFailed(error))
      }
    )
  }

export const fetchUser = id =>
  dispatch => {
    dispatch(fetchUsersRequested())
    api.fetchUser(id).then(
      response => {
        dispatch(fetchUsersSuccessful(response))
      },
      error => {
        dispatch(fetchUsersFailed(error))
      }
    )
  }
// ** selectors **
export const getSingleUser = (state, id) => {
  const {entities: {users: {byId}}} = state
  return byId && byId[id] ? byId[id] : {}
}

export const getIsFetching = state => {
  return state.entities.users.isFetching
}

// ** reducers **
const defaultState = {
  byId: {},
  allIds: [],
  isFetching: false,
  errorMessage: null
}

export const byId = (state = defaultState.byId, action = 'NONE') => {
  const {type, response} = action
  switch (type) {
    case FETCH_USERS_SUCCESSFUL:
      return {...state, ...response}
    case SIGN_IN_SUCCESSFUL:
      return {
        ...state,
        [action.user.uid]: action.user
      }
    default:
      return state
  }
}

export const allIds = (state = defaultState.allIds, action = 'NONE') => {
  const {type, response} = action
  switch (type) {
    case FETCH_USERS_SUCCESSFUL:
      const ids = Object.keys(response).filter(uid => state.indexOf(uid) < 0)
      return [...state, ...ids]
    default:
      return state
  }
}

export const isFetching = (
  state = defaultState.isFetching,
  action = 'NONE'
) => {
  const {type} = action
  switch (type) {
    case FETCH_USERS_REQUESTED:
      return true
    case FETCH_USERS_SUCCESSFUL:
    case FETCH_USERS_FAILED:
      return false
    default:
      return state
  }
}

export const errorMessage = (
  state = defaultState.errorMessage,
  action = 'NONE'
) => {
  const {type, message} = action
  switch (type) {
    case FETCH_USERS_FAILED:
      return message
    case FETCH_USERS_REQUESTED:
    case FETCH_USERS_SUCCESSFUL:
      return null
    default:
      return state
  }
}

export default combineReducers({byId, allIds, isFetching, errorMessage})
