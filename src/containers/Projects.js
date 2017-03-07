import React from 'react'

import createProject from '../test/fixtures/createProject'
import ProjectsList from '../components/projectsList'

export default ({props}) => {
  const projects = [
    createProject({name: 'Yeah Boy'}),
    createProject({name: 'Loving Those Factory Functions'}),
    createProject({name: 'When Building Props for Components'})
  ]

  return (
    <div className='container'>
      <h1 className="title is-2">Projects List</h1>
      <ProjectsList projects={projects} />
    </div>
  )
}
