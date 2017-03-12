import React from 'react'
import {connect} from 'react-redux'
import Loading from '../components/loading'
import {
  createProject,
  getSingleProject,
  fetchProjects,
  getIsFetchingProjects
} from '../reducers/projects'

import ProjectForm from '../components/projectForm'

class EditProject extends React.Component {
  componentDidMount () {
    const {fetchProjects} = this.props
    fetchProjects()
  }
  render () {
    if (this.props.isFetching) {
      return <Loading />
    }
    const {createProject, currentUser, project} = this.props
    console.log(project)
    return (
      <ProjectForm
        onSubmit={createProject}
        currentUser={currentUser}
        project={project}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {params: {id}} = ownProps
  return {
    isFetching: getIsFetchingProjects(state),
    currentUser: state.app.currentUser,
    project: getSingleProject(state, id)
  }
}

export default connect(mapStateToProps, {createProject, fetchProjects})(
  EditProject
)
