import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import ProjectDetails from '../components/projectDetails'
import RolesList from '../components/rolesList'
import {fetchProjects} from '../reducers/projects'

class ViewProject extends React.Component {
  componentDidMount () {
    fetchProjects()
  }
  render () {
    console.log(this.props)
    return (
      <div className='view-project'>
        <p className="title">VIEW PROJECT</p>
        <ProjectDetails tags={[]}/>
        <RolesList roles={[]}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    project: state.entities.byId['01']
  }
}

export default
  withRouter(
    connect(
      mapStateToProps,
      fetchProjects
    )(ViewProject))
