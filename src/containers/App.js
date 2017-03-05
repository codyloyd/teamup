import React, {Component} from 'react'
import {connect} from 'react-redux'
import Header from '../components/header'
import Footer from '../components/footer'
import './App.css'


class App extends Component {
  render () {
    const {children} = this.props
    return (
      <div className="App">
        <Header {...this.props} />
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

const mapStateToProps = (state) => {
  return {
    // All of these should not be accessing the state directly.
    // It should be coming from reducer selectors in the future.
    loggedIn: !!state.app.currentUser,
    currentUser: state.entities.users[state.app.currentUser] || {}
  }
}

const {
  bool, object
} = React.PropTypes

App.propTypes = {
  loggedIn: bool.isRequired,
  currentUser: object.isRequired
}

App.defaultProps = {

}

export default connect(mapStateToProps, {})(App)
