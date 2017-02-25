import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import firebaseApp from './firebase'
import {fetchProjects} from './api'

fetchProjects().then(data => console.log(data))

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
