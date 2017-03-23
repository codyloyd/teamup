import React from 'react'
import {Field, reduxForm} from 'redux-form'

const UserForm = props => {
  const {handleSubmit} = props
  console.log('userForm.js', props)
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Display Name</label>
        <div>
          <Field
            name="displayName"
            component="input"
            type="text"
            placeholder="Display Name"
            className="input"
          />
        </div>
      </div>
      <div className="field">
        <label className="label">email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="text"
            placeholder="email"
            className="input"
          />
        </div>
      </div>
    </form>
  )
}

export default reduxForm({form: 'userForm'})(UserForm)
