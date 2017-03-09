import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import ProjectDetails from '../components/projectDetails'
import RolesList from '../components/rolesList'
import Loading from '../components/loading'
import {fetchRoles} from '../reducers/roles'
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
    const {name, summary, description, tags} = this.props.project
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
          <p className="heading">Open Roles:</p>
          <RolesList roles={this.props.projectRoles || []} />
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
    projectRoles: getProjectRoles(state, id)
  }
}

export default withRouter(
  connect(mapStateToProps, {fetchProjects, fetchRoles})(ViewProject)
)
