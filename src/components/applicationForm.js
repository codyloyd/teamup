import React from 'react'

const ApplicationForm = (
  {createApplication, projectId, currentUser, roleId, roleName}
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
      <h1>Application for {roleName}</h1>
      <p>
        When you apply for this role, your profile information including your github profile will be sent to the project owner who will contact you if you are a good fit for the project.
      </p>
      <div className="control">
        <textarea
          type="textarea"
          ref={input => message = input}
          className="textarea"
          placeholder="Leave a short message to the project owner with your application."
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
