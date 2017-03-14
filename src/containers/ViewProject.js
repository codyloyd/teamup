import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router'
import ProjectDetails from '../components/projectDetails'
import RolesList from '../components/rolesList'
import Loading from '../components/loading'
import NewRole from '../components/newRole'
import {fetchRoles, createRole} from '../reducers/roles'
import {
  fetchProject,
  getIsFetchingProjects,
  getSingleProject,
  getProjectRoles
} from '../reducers/projects'

class ViewProject extends React.Component {
  componentDidMount () {
    const {fetchProject, fetchRoles} = this.props
    fetchProject(this.props.params.id)
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
          <ConditionalRoleForm
            currentUser={this.props.currentUser}
            ownerId={ownerId}
            createRole={this.props.createRole}
            id={id}
          />
        </div>
      </div>
    )
  }
}

export const ConditionalRoleForm = ({currentUser, ownerId, createRole, id}) => {
  return currentUser === ownerId
    ? <div className="role-form">
        <Link className="button is-primary" to={`/projects/${id}/edit`}>
          EDIT PROJECT
        </Link>
        <p className="heading">Create New Role:</p>
        <NewRole createRole={createRole} projectId={id} />
      </div>
    : null
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
  connect(mapStateToProps, {fetchProject, fetchRoles, createRole})(ViewProject)
)
