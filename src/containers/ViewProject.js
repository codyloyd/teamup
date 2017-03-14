import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router'
import ProjectDetails from '../components/projectDetails'
import RolesList from '../components/rolesList'
import Loading from '../components/loading'
import NewRole from '../components/newRole'
import ApplicationForm from '../components/applicationForm'
import {fetchRoles, createRole} from '../reducers/roles'
import {
  fetchProject,
  getIsFetchingProjects,
  getSingleProject,
  getProjectRoles
} from '../reducers/projects'
import {getApplicationForm, toggleApplicationForm} from '../reducers/ui'

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
            <RolesList
              toggleApplicationForm={this.props.toggleApplicationForm}
              roles={this.props.projectRoles || []}
            />
          </div>
          <ConditionalRoleForm
            currentUser={this.props.currentUser}
            ownerId={ownerId}
            createRole={this.props.createRole}
            id={id}
          />
        </div>
        <ConditionalApplicationForm
          visibility={this.props.applicationForm}
          toggleApplicationForm={this.props.toggleApplicationForm}
        />
      </div>
    )
  }
}

export const ConditionalApplicationForm = (
  {visibility, toggleApplicationForm}
) => {
  return (
    <div className={`modal ${visibility ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={toggleApplicationForm} />
      <div className="modal-content">
        <div className="box">
          <ApplicationForm roleName={'javascript dev'} />
        </div>
      </div>
      <button className="modal-close" onClick={toggleApplicationForm} />
    </div>
  )
}

export const ConditionalRoleForm = ({currentUser, ownerId, createRole, id}) => {
  return currentUser === ownerId
    ? <div className="role-form">
        <Link className="button is-primary" to={`/projects/${id}/edit`} />
        <p className="heading">Create New Role:</p>
        <NewRole createRole={createRole} projectId={id} />
      </div>
    : null
}

const mapStateToProps = (state, ownProps) => {
  const {params: {id}} = ownProps
  return {
    applicationForm: getApplicationForm(state),
    isFetching: getIsFetchingProjects(state),
    project: getSingleProject(state, id),
    projectRoles: getProjectRoles(state, id),
    currentUser: state.app.currentUser
  }
}

export default withRouter(
  connect(mapStateToProps, {
    fetchProject,
    fetchRoles,
    createRole,
    toggleApplicationForm
  })(ViewProject)
)
