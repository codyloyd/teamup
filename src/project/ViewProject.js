import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router'
import ProjectDetails from '../components/projectDetails'
import RolesList from '../components/rolesList'
import Loading from '../components/loading'
import NewRole from '../components/newRole'
import ApplicationForm from '../components/applicationForm'
import {fetchRoles, createRole} from './roles-reducer'
import {createApplication} from '../application/applications-reducer'
import {getRoleForm, toggleRoleForm} from '../project/ui-roleForm-reducer'
import {
  fetchProject,
  getIsFetchingProjects,
  getSingleProject,
  getProjectRoles
} from './projects-reducer'
import {
  getApplicationForm,
  toggleApplicationForm
} from '../application/ui-applicationForm-reducer'

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
          <ProjectManagementTools
            currentUser={this.props.currentUser}
            ownerId={ownerId}
            id={id}
            toggleRoleForm={this.props.toggleRoleForm}
          />
          <p className="heading">Open Roles:</p>
          <RolesList
            toggleApplicationForm={this.props.toggleApplicationForm}
            roles={this.props.projectRoles || []}
          />
        </div>
        <ConditionalRoleForm
          visibility={this.props.roleForm.visibility}
          toggleRoleForm={this.props.toggleRoleForm}
          createRole={this.props.createRole}
          id={id}
        />
        <ConditionalApplicationForm
          visibility={this.props.applicationForm.visibility}
          role={this.props.rolesById[this.props.applicationForm.role]}
          toggleApplicationForm={this.props.toggleApplicationForm}
          createApplication={this.props.createApplication}
          currentUser={this.props.currentUser}
        />
      </div>
    )
  }
}

export const ProjectManagementTools = (
  {currentUser, ownerId, id, toggleRoleForm}
) => {
  return currentUser === ownerId
    ? <div className="control is-grouped">
        <div className="control">
          <Link className="button is-primary" to={`/projects/${id}/edit`}>
            Edit Project
          </Link>
        </div>
        <div className="control">
          <button className="button is-primary" onClick={toggleRoleForm}>
            Add Role
          </button>
        </div>
      </div>
    : null
}

export const ConditionalApplicationForm = (
  {visibility, toggleApplicationForm, role, createApplication, currentUser}
) => {
  return (
    <div className={`modal ${visibility ? 'is-active' : ''}`}>
      <div
        className="modal-background"
        onClick={() => toggleApplicationForm('')}
      />
      <div className="modal-content">
        <div className="box">
          <ApplicationForm
            role={role}
            currentUser={currentUser}
            createApplication={createApplication}
          />
        </div>
      </div>
      <button
        className="modal-close"
        onClick={() => toggleApplicationForm('')}
      />
    </div>
  )
}

export const ConditionalRoleForm = (
  {createRole, id, visibility, toggleRoleForm}
) => {
  return (
    <div className={`modal ${visibility ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={() => toggleRoleForm('')} />
      <div className="modal-content">
        <div className="box">
          <NewRole createRole={createRole} projectId={id} />
        </div>
      </div>
      <button className="modal-close" onClick={() => toggleRoleForm('')} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const {params: {id}} = ownProps
  return {
    applicationForm: getApplicationForm(state),
    roleForm: getRoleForm(state),
    rolesById: state.entities.roles.byId,
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
    toggleApplicationForm,
    createApplication,
    toggleRoleForm
  })(ViewProject)
)
