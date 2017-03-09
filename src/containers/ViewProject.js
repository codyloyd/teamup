import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import ProjectDetails from '../components/projectDetails'
import RolesList from '../components/rolesList'
import Loading from '../components/loading'
import {fetchProjects} from '../reducers/projects'
import {fetchRoles} from '../reducers/roles'


class ViewProject extends React.Component {
  componentDidMount () {
    const {fetchProjects, fetchRoles} = this.props
    fetchProjects()
    fetchRoles(this.props.params.id)
  }
  render () {
    if (this.props.isFetching) {
      return <Loading />
    }
    const {title, summary, description, tags} = this.props.project
    return (
      <div className='view-project container'>
        <div className="column is-10 is-offset-1">
          <p className="heading">Project Details:</p>
          <ProjectDetails
            title={title}
            summary={summary}
            description={description}
            tags={tags || []}
          />
          <p className="heading">Open Roles:</p>
          <RolesList roles={this.props.projectRoles || []}/>
        </div>
      </div>
    )
  }
}


// not sure where to put these
const getSingleProject = (state, id) => {
  const {entities: {projects: {byId}}} = state
  return (byId && byId[id]) ? byId[id] : {}
}
const getProjectRoles = (state, id) => {
  const {entities: {roles: {byId}}} = state
  return (byId)
    ? Object.values(byId).filter(r => r.projectId === id)
    : []
}
const getIsFetchingProjects = (state) => {
  return state.entities.projects.isFetching
}

const mapStateToProps = (state, ownProps) => {
  const {params: {id}} = ownProps
  return {
    isFetching: getIsFetchingProjects(state),
    project: getSingleProject(state, id),
    projectRoles: getProjectRoles(state, id)
  }
}

export default
  withRouter(
    connect(
      mapStateToProps,
      {fetchProjects, fetchRoles}
    )(ViewProject))
