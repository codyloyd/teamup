import React from 'react'
import {Link} from 'react-router'
import * as auth from '../api/auth'

const SignInOutButton = ({loggedIn = false}) => {
  if (loggedIn) {
    return (
      <a className="nav-item is-tab sign-out"
        onClick={(e) => {
          e.preventDefault()
          auth.signOut()
        }}
      >Log out
      </a>
    )
  }
  return (
    <a className="nav-item is-tab sign-in"
      onClick={(e) => {
        e.preventDefault()
        auth.signInWithGithub()
      }}
    >Log In
    </a>
  )
}
const Profile = ({loggedIn = false}) => {
  if (loggedIn) {
    return (
      <Link to="/profile/" className="nav-item is-tab profile">
        Profile
      </Link>
    )
  }
  return (
    <span></span>
  )
}
const header = (props) => {
  return (
    <nav className="nav has-shadow">
      <div className="container">
        <div className="nav-left">
          <Link to="/" className="nav-item">
            Team Up
          </Link>
          <Link to="/projects/" className="nav-item is-tab is-hidden-mobile">Projects</Link>
          <Link to="/project/new/" className="nav-item is-tab is-hidden-mobile">Create New Project</Link>
        </div>
        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="nav-right nav-menu">
          <Link to="/projects/" className="nav-item is-tab is-hidden-tablet">Projects</Link>
          <Link to="/project/new/" className="nav-item is-tab is-hidden-tablet">Create New Project</Link>
          <Profile {...props} />
          <SignInOutButton {...props} />
        </div>
      </div>
    </nav>
  )
}

const {
  bool, shape, func
} = React.PropTypes

header.propTypes = {
  loggedIn: bool.isRequired,
  actions: shape({
    signIn: func.isRequired,
    signOut: func.isRequired
  })
}

header.defaultProps = {

}

export default header
