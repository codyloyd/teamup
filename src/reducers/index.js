import projects from './projects'
import thunk from 'redux-thunk'
import { combineReducers, applyMiddleware } from 'redux'

export default combineReducers(projects, applyMiddleware(thunk))
