import React from 'react'
import {connect} from 'react-redux'
import {fetchUser, getSingleUser} from '../reducers/users'

class Profile extends React.Component {
  componentDidMount () {
    this.props.fetchUser(this.props.params.id)
  }
  render () {
    if (this.props.user) {
      return (
        <div className="container">
          <div className="column is-10 is-offset-1">
            <div className="box">
              <div className="columns">
                <div className="column is-narrow">
                  <figure className="image is-128x128">
                    <img src={this.props.user.photoURL} alt="avatar" />
                  </figure>
                  <aside className="menu">
                    <ul className="menu-list">
                      <li>
                        <a href="#">
                          <i className="fa fa-github fa-fw" />
                          {' '}
                          GitHub
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-link fa-fw" />
                          {' '}Personal Website
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin fa-fw" />
                          {' '}LinkedIn
                        </a>
                      </li>
                    </ul>
                  </aside>
                </div>
                <div className="column">
                  <h1 className="title">{this.props.user.displayName}</h1>
                  <p>{this.props.user.about}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return null
  }
}

const mapStateToProps = (state, ownProps) => {
  const {params: {id}} = ownProps
  return {
    user: getSingleUser(state, id)
  }
}

export default connect(mapStateToProps, {fetchUser})(Profile)
