import React from 'react'

const NewRole = ({createRole, projectId}) => {
  let name, description
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        createRole({
          projectId,
          name: name.value,
          description: description.value
        })
        name.value = ''
        description.value = ''
      }}
    >
      <label className="label">Role Name</label>
      <div className="control">
        <input type="text" ref={input => name = input} className="input" />
      </div>
      <label className="label">Role Description</label>
      <div className="control">
        <textarea
          type="textarea"
          ref={input => description = input}
          className="textarea"
        />
      </div>
      <div className="control">
        <input
          type="submit"
          value="Create Role"
          className="button is-primary"
        />
      </div>
    </form>
  )
}

export default NewRole
