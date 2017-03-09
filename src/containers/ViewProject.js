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
    console.log(this.props)
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

const mapStateToProps = (state, ownProps) => {
  const {params: {id}} = ownProps
  const {entities: {projects: {byId}}} = state
  const project = (byId && byId[id]) ? byId[id] : {}
  const {entities: {roles}} = state
  const projectRoles = (roles.byId)
    ? Object.values(roles.byId).filter(r => r.projectId === id)
    : []
  return {
    isFetching: state.entities.projects.isFetching,
    projectRoles,
    project
  }
}

export default
  withRouter(
    connect(
      mapStateToProps,
      {fetchProjects, fetchRoles}
    )(ViewProject))
