import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import mainAppReducer from './reducers'

export default () => {
  const middlewares = [thunk]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }
  const store = createStore(mainAppReducer, applyMiddleware(...middlewares))
  return store
}
