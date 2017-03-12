import React from 'react'
import {connect} from 'react-redux'
import {createProject} from '../reducers/projects'

import ProjectForm from '../components/projectForm'

const NewProject = ({createProject, currentUser}) => {
  return <ProjectForm onSubmit={createProject} currentUser={currentUser} />
}

const mapStateToProps = state => {
  return {
    currentUser: state.app.currentUser
  }
}

export default connect(mapStateToProps, {createProject})(NewProject)
