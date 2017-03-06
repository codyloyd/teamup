import React from 'react'

export default ({title, summary, description}) => {
  return (
    <div>
      <p className="title project-title">{title}</p>
      <p className="project-summary">{summary}</p>
      <p className="project-description">{description}</p>
    </div>
  )
}
