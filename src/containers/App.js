import React, {Component} from 'react'
import {Link} from 'react-router'
import logo from '../images/logo.svg'
import './App.css'

class App extends Component {
  render () {
    const {children} = this.props
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Teamup</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          All your projects are belong to us!
        </p>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/project">Project</Link></li>
        </ul>
        {children}
      </div>
    )
  }
}

export default App
