import React from 'react'
import ProjectsList from '../components/projects-list'

export default ({props}) => {
  const createProject = ({
    id = '01',
    ownerId = '1234',
    name = 'project name',
    description = 'project description.....',
    summary = 'project summary.....',
    status = 'open',
    roles = [
      'roleId1',
      'roleId2'
    ],
    tags = [
      'tag1',
      'tag2',
      'tag3'
    ],
    timeStamp = 123456,
    lastUpdated = 123456
  } = {}) => ({
    id, ownerId, name, description, summary, status, roles, tags, timeStamp, lastUpdated
  })
  const projects = [
    createProject({id: '01'}),
    createProject({id: '02'}),
    createProject({id: '03'})
  ]

  return (
    <div className='container'>
      <h1 className="title is-2">Projects List</h1>
      <ProjectsList projects={projects} />
    </div>
  )
}
