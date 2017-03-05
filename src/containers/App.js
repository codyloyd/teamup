import React, {Component} from 'react'
import {connect} from 'react-redux'
import Header from '../components/header'
import Footer from '../components/footer'

class App extends Component {
  render () {
    const {children} = this.props
    return (
      <div className="App">
        <Header {...this.props} />
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                All your projects are belong to us!
              </h1>
            </div>
          </div>
        </section>
        <section className="section">
          {children}
        </section>
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
