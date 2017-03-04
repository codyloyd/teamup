import React from 'react'
import {Link} from 'react-router'
import logo from '../images/logo.svg'
import * as auth from '../api/auth'

export default React => props => {
  return (
    <nav className="nav has-shadow">
      <div className="container">
        <div className="nav-left">
          <Link to="/" className="nav-item">
            Team Up
          </Link>
          <Link to="/projects/" className="nav-item is-tab is-hidden-mobile">Projects</Link>
          <Link to="/projects/new/" className="nav-item is-tab is-hidden-mobile">Create New Project</Link>
          <a className="nav-item is-tab is-hidden-mobile">Pricing</a>
          <a className="nav-item is-tab is-hidden-mobile">About</a>
        </div>
        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="nav-right nav-menu">
          <a className="nav-item is-tab is-hidden-tablet is-active">Home</a>
          <a className="nav-item is-tab is-hidden-tablet">Features</a>
          <a className="nav-item is-tab is-hidden-tablet">Pricing</a>
          <a className="nav-item is-tab is-hidden-tablet">About</a>
          <Link to="/profile/" className="nav-item is-tab">
            Profile
          </Link>
          <a
            className="nav-item is-tab"
            onClick={(e) => {
              e.preventDefault()
              auth.signInWithGithub()
            }}
          >Log In
          </a>
          <a
            className="nav-item is-tab"
            onClick={(e) => {
              e.preventDefault()
              auth.signOut()
            }}
          >Log out
          </a>
        </div>
      </div>
    </nav>
  )
}