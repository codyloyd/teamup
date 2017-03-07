import React from 'react'

const Project = (props) => (
  <li>
    {props.name}
  </li>
)

const ProjectsList = ({ projects = [] }) => (
  <section className="section">
    <div className="container">
      <div className="content">
        <ul className="projects-list">
          {projects.map(project =>
                <Project
                  key={project.id}
                  {...project}
                />
              )}
        </ul>
      </div>
    </div>
  </section>
)

export default ProjectsList
