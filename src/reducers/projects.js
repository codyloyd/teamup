import {combineReducers} from 'redux'
import cuid from 'cuid'
import project from './project'

// ** action types **
const CREATE_PROJECT = 'CREATE_PROJECT'
// ** action creators **
export const createProject = ({
  ownerId = '',
  name = '',
  summary = '',
  tags = [],
  description = '',
  roles = [],
  id = cuid(),
  status = 'open',
  timeStamp = Date.now(),
  lastUpdated = Date.now()
}) => (
  {
    type: CREATE_PROJECT,
    payload: {
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
    }
  }
)

const defaultState = {
  byId: {},
  allIds: []
}
export const byId = (state = defaultState.byId, action) => {
  const { type, payload } = action
  switch (type) {
    case 'CREATE_PROJECT':
      return {...state, [payload.id]: project(state[payload.id], action)}
    default:
      return state
  }
}

export const allIds = (state = defaultState.allIds, action) => {
  const { type, payload } = action
  switch (type) {
    case 'CREATE_PROJECT':
      return [...state, payload.id]
    default:
      return state
  }
}

export const projects = combineReducers({byId, allIds})
