import React from 'react'
import {browserHistory} from 'react-router'

const ProjectForm = ({onSubmit, currentUser, project = {}}) => {
  let name, summary, description, tags
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onSubmit({
          ownerId: currentUser,
          name: name.value,
          summary: summary.value,
          description: description.value,
          tags: tags.value.split(',')
        }).then(data => browserHistory.push(`/projects/${data.id}`))
      }}
    >
      <label className="label">Project Name</label>
      <div className="control">
        <input
          type="text"
          ref={input => name = input}
          className="input"
          value={project.name}
        />
      </div>
      <label className="label">Short Summary</label>
      <div className="control">
        <input
          type="text"
          ref={input => summary = input}
          className="input"
          value={project.summary}
        />
      </div>
      <label className="label">Detailed Description</label>
      <div className="control">
        <textarea
          type="textarea"
          ref={input => description = input}
          className="textarea"
          value={project.description}
        />
      </div>
      <label className="label">Tags</label>
      <div className="control">
        <input
          type="text"
          placeholder="comma separated list..."
          ref={input => tags = input}
          className="input"
          value={project.tags}
        />
      </div>
      <div className="control">
        <input type="submit" value="Create Project" className="button" />
      </div>
    </form>
  )
}

export default ProjectForm
