import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router'
import ProjectDetails from '../components/projectDetails'
import RolesList from '../components/rolesList'
import Loading from '../components/loading'
import NewRole from '../components/newRole'
import {fetchRoles, createRole} from '../reducers/roles'
import {
  fetchProjects,
  getIsFetchingProjects,
  getSingleProject,
  getProjectRoles
} from '../reducers/projects'

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
    const {id, name, summary, description, tags, ownerId} = this.props.project
    return (
      <div className="view-project container">
        <div className="column is-10 is-offset-1">
          <p className="heading">Project Details:</p>
          <ProjectDetails
            title={name}
            summary={summary}
            description={description}
            tags={tags || []}
          />
          <div className="">
            <p className="heading">Open Roles:</p>
            <RolesList roles={this.props.projectRoles || []} />
          </div>
          {this.props.currentUser === ownerId
            ? <div className="">
                <Link className="button is-primary" to={`/projects/${id}/edit`}>
                  EDIT PROJECT
                </Link>
                <p className="heading">Create New Role:</p>
                <NewRole createRole={this.props.createRole} projectId={id} />
              </div>
            : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {params: {id}} = ownProps
  return {
    isFetching: getIsFetchingProjects(state),
    project: getSingleProject(state, id),
    projectRoles: getProjectRoles(state, id),
    currentUser: state.app.currentUser
  }
}

export default withRouter(
  connect(mapStateToProps, {fetchProjects, fetchRoles, createRole})(ViewProject)
)
