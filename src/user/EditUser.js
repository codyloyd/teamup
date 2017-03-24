import React from 'react'
import {connect} from 'react-redux'
import UserForm from './userForm'
import Loading from '../components/loading'
import {getSingleUser, fetchUser, getIsFetching} from './users-reducer'

class EditUser extends React.Component {
  componentDidMount () {
    this.props.fetchUser(this.props.params.id)
  }
  componentDidUpdate () {
    // console.log(this.props);
  }
  render () {
    console.log('My User', this.props.user.displayName)
    return this.props.isFetching || !this.props.user.displayName
      ? <Loading />
      : <div>
          <UserForm
            onSubmit={console.log}
            initialValues={{...this.props.user}}
          />
        </div>
  }
}

const mapStateToProps = (state, ownProps) => {
  const {params: {id}} = ownProps
  return {
    isFetching: getIsFetching(state),
    user: getSingleUser(state, id)
  }
}

export default connect(mapStateToProps, {fetchUser})(EditUser)
