import React from 'react'
import UserForm from './userForm'

class EditUser extends React.Component {
  render () {
    return (
      <div>
        <UserForm onSubmit={console.log} />
      </div>
    )
  }
}

export default EditUser
