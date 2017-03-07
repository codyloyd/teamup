import React from 'react'

const ProjectsListProject = (props) => {
  const { name, summary, description } = props
  return (
    <li>
      <h3>{name}</h3>
      {summary}<br />
      {description}
      <br />
      <br />
    </li>
  )
}

const ProjectsList = ({ projects = [] }) => (
  <div className="container">
    <div className="content">
      <ul className="projects-list" style={{listStyle: 'none'}}>
        {projects.map(project =>
              <ProjectsListProject
                key={project.id}
                {...project}
              />
            )}
      </ul>
    </div>
  </div>
)

export default ProjectsList
