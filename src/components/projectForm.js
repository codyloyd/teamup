import React from 'react'
import {browserHistory} from 'react-router'

const ProjectForm = (
  {
    onSubmit,
    currentUser,
    project = {
      name: '',
      summary: '',
      description: '',
      tags: ''
    }
  }
) => {
  let name, summary, description, tags
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onSubmit({
          id: project.id,
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
          defaultValue={project.name}
        />
      </div>
      <label className="label">Short Summary</label>
      <div className="control">
        <input
          type="text"
          ref={input => summary = input}
          className="input"
          defaultValue={project.summary}
        />
      </div>
      <label className="label">Detailed Description</label>
      <div className="control">
        <textarea
          type="textarea"
          ref={input => description = input}
          className="textarea"
          defaultValue={project.description}
        />
      </div>
      <label className="label">Tags</label>
      <div className="control">
        <input
          type="text"
          placeholder="comma separated list..."
          ref={input => tags = input}
          className="input"
          defaultValue={project.tags}
        />
      </div>
      <div className="control">
        <input type="submit" value="Create Project" className="button" />
      </div>
    </form>
  )
}

export default ProjectForm
