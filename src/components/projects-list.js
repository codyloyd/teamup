import React from 'react'

export default props => (
  <section className="section">
    <div className="container">
      <div className="content">
        <ul className="projects-list">
          <li>{props.projects}</li>
        </ul>
      </div>
    </div>
  </section>
)
