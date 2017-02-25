import project from './project'

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
