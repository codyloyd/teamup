import React from 'react'
import {connect} from 'react-redux'
import {createProject} from '../reducers/projects'

const NewProject = ({createProject, currentUser}) => {
  let name, summary, description, tags
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        createProject({
          ownerId: currentUser,
          name: name.value,
          summary: summary.value,
          description: description.value,
          tags: tags.value.split(',')
        })
      }}
    >
      <label className="label">Project Name</label>
      <div className="control">
        <input type="text" ref={input => name = input} className="input" />
      </div>
      <label className="label">Short Summary</label>
      <div className="control">
        <input type="text" ref={input => summary = input} className="input" />
      </div>
      <label className="label">Detailed Description</label>
      <div className="control">
        <textarea
          type="textarea"
          ref={input => description = input}
          className="textarea"
        />
      </div>
      <label className="label">Tags</label>
      <div className="control">
        <input
          type="text"
          placeholder="comma separated list..."
          ref={input => tags = input}
          className="input"
        />
      </div>
      <div className="control">
        <input type="submit" value="Create Project" className="button" />
      </div>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.app.currentUser
  }
}

export default connect(mapStateToProps, {createProject})(NewProject)
