import React from 'react'
import {connect} from 'react-redux'
import {fetchUser, getSingleUser} from '../reducers/users'

class Profile extends React.Component {
  componentDidMount () {
    this.props.fetchUser(this.props.params.id)
  }
  render () {
    if (this.props.user) {
      return <h1 className="title">{this.props.user.displayName}</h1>
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
