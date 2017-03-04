import React, {Component} from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import './App.css'


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
        <Footer />
      </div>
    )
  }
}

export default App
