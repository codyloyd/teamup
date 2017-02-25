import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import {fetchProjects_} from './api'

fetchProjects_().then(data => console.log(data))

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
