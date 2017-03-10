import {combineReducers} from 'redux'
import cuid from 'cuid'

import * as api from '../api'

// ** action types **
export const FETCH_PROJECTS_REQUESTED = 'FETCH_PROJECTS_REQUESTED'
export const FETCH_PROJECTS_SUCCESSFUL = 'FETCH_PROJECTS_SUCCESSFUL'
export const FETCH_PROJECTS_FAILED = 'FETCH_PROJECTS_FAILED'

export const FETCH_PROJECT_SUCCESSFUL = 'FETCH_PROJECT_SUCCESSFUL'

export const CREATE_PROJECT_SUCCESSFUL = 'CREATE_PROJECT_SUCCESSFUL'
// ** action creators **

// ** async actions **
// these use thunks

export const fetchProject = id => dispatch => {
  console.log(id)
  api.fetchProject(id).then(response => {
    dispatch({
      type: FETCH_PROJECT_SUCCESSFUL,
      response
    })
  })
}

export const fetchProjects = id => dispatch => {
  dispatch({type: FETCH_PROJECTS_REQUESTED})
  api.fetchProjects().then(
    response => {
      dispatch({
        type: FETCH_PROJECTS_SUCCESSFUL,
        response
      })
    },
    error => {
      dispatch({
        type: FETCH_PROJECTS_FAILED,
        message: error.message || 'something went wrong'
      })
    }
  )
}

export const createProject = (
  {
    id = cuid(),
    ownerId = '',
    name = '',
    summary = '',
    tags = [],
    description = '',
    roles = [],
    status = 'open',
    timeStamp = Date.now(),
    lastUpdated = Date.now()
  }
) => dispatch => {
  return api
    .createProject({
      id,
      ownerId,
      name,
      summary,
      tags,
      description,
      roles,
      status,
      timeStamp,
      lastUpdated
    })
    .then(response => {
      dispatch({
        type: CREATE_PROJECT_SUCCESSFUL,
        response
      })
      return response
    })
}

// ** selectors **
export const getSingleProject = (state, id) => {
  const {entities: {projects: {byId}}} = state
  return byId && byId[id] ? byId[id] : {}
}
export const getProjectRoles = (state, id) => {
  const {entities: {roles: {byId}}} = state
  return byId ? Object.values(byId).filter(r => r.projectId === id) : []
}
export const getIsFetchingProjects = state => {
  return state.entities.projects.isFetching
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
    case FETCH_PROJECTS_SUCCESSFUL:
      return {...state, ...response}
    case CREATE_PROJECT_SUCCESSFUL:
      return {...state, [response.id]: response}
    default:
      return state
  }
}

export const allIds = (state = defaultState.allIds, action) => {
  const {type, response} = action
  switch (type) {
    case FETCH_PROJECTS_SUCCESSFUL:
      const newIds = Object.keys(response).filter(k => state.indexOf(k) <= 0)
      return [...state, ...newIds]
    case CREATE_PROJECT_SUCCESSFUL:
      return [...state, response.id]
    default:
      return state
  }
}

export const isFetching = (state = defaultState.isFetching, action) => {
  const {type} = action
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

export const errorMessage = (state = defaultState.errorMessage, action) => {
  const {type} = action
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

export default combineReducers({byId, allIds, isFetching, errorMessage})
