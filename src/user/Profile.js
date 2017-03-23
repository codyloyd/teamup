import React from 'react'
import {connect} from 'react-redux'
import {fetchUser, getSingleUser} from './users-reducer'

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
                  <Links
                    links={this.props.user.links}
                    email={this.props.user.email}
                  />
                </div>
                <div className="column">
                  <h1 className="title">{this.props.user.displayName || ''}</h1>
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

const Links = ({links, email}) => {
  return (
    <aside className="menu">
      <ul className="menu-list">
        <li>
          <a href={`mailto:${email}`}>
            <i className="fa fa-envelope-o fa-fw" />
            {' '}{email}
          </a>
        </li>
        {links
          ? links.map(link => <ProfileLink key={link.url} link={link} />)
          : null}
      </ul>
    </aside>
  )
}

const icons = {
  GitHub: 'fa-github',
  LinkedIn: 'fa-linkedin',
  Twitter: 'fa-twitter',
  Facebook: 'fa-facebook-official',
  'Stack Overflow': 'fa-stack-overflow'
}

const ProfileLink = ({link}) => {
  return (
    <li>
      <a href={link.url}>
        <i className={`fa fa-fw ${icons[link.name] || 'fa-link'}`} />
        {' '}{link.name}
      </a>
    </li>
  )
}

const mapStateToProps = (state, ownProps) => {
  const {params: {id}} = ownProps
  return {
    user: getSingleUser(state, id)
  }
}

export default connect(mapStateToProps, {fetchUser})(Profile)
