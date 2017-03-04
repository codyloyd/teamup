import React, {Component} from 'react'
import {Link} from 'react-router'
import header from '../components/header'
import './App.css'

const Header = header(React)

class App extends Component {
  render () {
    const {children} = this.props
    return (
      <div className="App">
        <Header />
        <div className="App-header">
        </div>
        <p className="App-intro">
          All your projects are belong to us!
        </p>
        {children}
      </div>
    )
  }
}

export default App
