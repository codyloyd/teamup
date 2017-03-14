import React from 'react'

const ApplicationForm = (
  {createApplication, projectId, currentUser, roleId}
) => {
  let message
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        createApplication({
          projectId,
          roleId,
          userId: currentUser,
          message: message.value
        })
        message.value = ''
      }}
    >
      <label className="label">A short message to the project owner:</label>
      <div className="control">
        <textarea
          type="textarea"
          ref={input => message = input}
          className="textarea"
        />
      </div>
      <div className="control">
        <input
          type="submit"
          value="Submit Application"
          className="button is-primary"
        />
      </div>
    </form>
  )
}

export default ApplicationForm
